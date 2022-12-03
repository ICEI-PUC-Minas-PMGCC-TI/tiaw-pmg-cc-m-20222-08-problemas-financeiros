// Recuperar ou criar os dados, caso não exista algum no local storage
function leiaDados(){
    let strDados = localStorage.getItem('db');
    let dados;
    if(strDados){
        dados=JSON.parse(strDados);
    }
    else {
        alert(`Não existe objeto no LocalStorage!`);
    }
    return dados;
}

/* Seletor de Clientes - INÍCIO */

function imprimaSeletorClientes(){
    let seletor = document.querySelector("#seletor-cliente");
    let strHtml = `<h3>Olá <span>${usuarioCorrente.nome}</span>, clique no botão abaixo para consultar seu extrato!</h3>`;
    seletor.innerHTML = strHtml;
}

/* Seletor de Clientes - FIM */

/* Tabela dos Extratos - INÍCIO */
function imprimaTabelaExtrato(){
    let objDados = leiaDados();
    let possuiLancamentos = false;
    for(let c = 0; c < objDados.dados.lancamentos.length; c++){
        if(usuarioCorrente.id == objDados.dados.lancamentos[c].id) possuiLancamentos = true;
    }
    if(possuiLancamentos){
        let tabela = document.querySelector("#tabela-extrato");
        let strHtml = `<thead>
            <tr class="table-secondary">
            <th scope="col">Data</th>
            <th scope="col">Descrição</th>
            <th scope="col">Valor (R$)</th>
            </tr>
        </thead>
        <tbody class="corpo-tabela-extrato"></tbody>`;
        tabela.innerHTML = strHtml;
        imprimaLinhasTabelaExtrato();
    } else{
        document.querySelector("div.alerta").innerHTML = `<h4>Desculpe ${usuarioCorrente.nome}, mas você não possui nenhum lançamento.</h4>`;
    }
}
function imprimaLinhasTabelaExtrato(){
    let objDados = leiaDados();
    let corpoTabela = document.querySelector("tbody.corpo-tabela-extrato");
    let strHtml = ``;
    let nomeSeletor = usuarioCorrente.nome;
    let ERRO = nomeSeletor == "Selecione o nome do Cliente";
    if(ERRO){
        alert("Selecione o cliente que deseja consultar o extrato!");
    }
    else{
        let idCliente = idClienteNome(objDados , nomeSeletor);
        let saldo = 0;
        for(let i = 0; i < objDados.dados.lancamentos.length; i++){
            if(objDados.dados.lancamentos[i].id == idCliente){
                if(objDados.dados.lancamentos[i].valor > 0){ //Adiciona uma linha com o valor em verde
                    strHtml += `<tr>
                        <td class="table-light">${objDados.dados.lancamentos[i].data.dia}/${objDados.dados.lancamentos[i].data.mes}/${objDados.dados.lancamentos[i].data.ano}</td>
                        <td class="table-light">${objDados.dados.lancamentos[i].descricao}</td>
                        <td class="table-success">${objDados.dados.lancamentos[i].valor}</td>
                    </tr>`;
                    saldo += objDados.dados.lancamentos[i].valor;
                }
                else { //Adiciona uma linha com o valor em vermelho
                    strHtml += `<tr>
                        <td class="table-light">${objDados.dados.lancamentos[i].data.dia}/${objDados.dados.lancamentos[i].data.mes}/${objDados.dados.lancamentos[i].data.ano}</td>
                        <td class="table-light">${objDados.dados.lancamentos[i].descricao}</td>
                        <td class="table-danger">${objDados.dados.lancamentos[i].valor}</td>
                    </tr>`;
                    saldo += objDados.dados.lancamentos[i].valor;
                }
            }
        }
        if(saldo > 0 ){
            strHtml += `<tr>
                <td colspan="2" class="table-secondary">Saldo</td>
                <td class="table-success">${saldo.toFixed(2)}</td>
            </tr>`;
        }
        else{
            strHtml += `<tr>
                <td colspan="2" class="table-secondary">Saldo</td>
                <td class="table-danger">${saldo.toFixed(2)}</td>
            </tr>`;
        }
    }
    corpoTabela.innerHTML = strHtml;
}
/* Tabela dos Extratos - FIM */

/* Recupera o id do cliente selecionado no local storage */
function idClienteNome(objDados,nomeSeletor){
    let i = 0;
    while(objDados.dados.contasBancarias[i].nome != nomeSeletor) i++;
    let id = objDados.dados.contasBancarias[i].id;
    return id;
}

//Configuração dos botões
document.querySelector("#conferir-extrato").addEventListener('click', imprimaTabelaExtrato);