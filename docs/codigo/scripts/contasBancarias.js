/*document.getElementById('formularioContas').addEventListener('change', function (){
    atribuirBotoes();
})

function atribuirBotoes(){
    document.getElementById('btnIncluirConta').addEventListener('click', incluaConta)
    document.getElementById('btnAtualizarConta').addEventListener('click', atualizeConta)
}*/

function imprimaFormularioCadastro(){
    let formulario=document.querySelector('#formularioContas');
    let strHtml=`<div class="input-group mb-3">
    <label class="input-group-text" for="inputGroupSelect01">Nome</label>
    <select class="formulario-cadastrar form-select" id="inputGroupSelect01"></select>
    </div>
    <p>Número do Banco: <input type="text" id="campoNumeroBanco"></p>
    <p>Agência: <input type="text" id="campoNumeroAgencia"></p>
    <p>Número da Conta: <input type="text" id="campoNumeroConta"></p>
    <button id="btnIncluirConta">Salvar Conta</button>`;
    formulario.innerHTML=strHtml;
    imprimaNomeCadastro()
}

function imprimaNomeAtualizar(){
    let objDados = leiaDados();
    let dropDown=document.querySelector('select.formulario-atualizar');
    let strHtml=`<option selected>Selecione seu Nome</option>`;
    for(let i = 0; i < objDados.dados.contasBancarias.length; i++){
        strHtml+=`<option value="${objDados.dados.contasBancarias[i].nome}">${objDados.dados.contasBancarias[i].nome}</option>`;
    }
    dropDown.innerHTML=strHtml;
}
function imprimaNomeCadastro(){
    let objDados = leiaDados();
    let dropDown=document.querySelector('select.formulario-cadastrar');
    let strHtml=`<option selected>Selecione seu Nome</option>`;
    for(let i = 0; i < objDados.dados.contas.length; i++){
        strHtml+=`<option value="${objDados.dados.contas[i].nome}">${objDados.dados.contas[i].nome}</option>`;
    }
    dropDown.innerHTML=strHtml;
}


function imprimaFormularioAtualizar(){
    let formulario=document.getElementById('formularioContas');
    let strHtml=`<div class="input-group mb-3">
    <label class="input-group-text" for="inputGroupSelect01">Nome</label>
    <select class="formulario-atualizar form-select" id="inputGroupSelect01"></select>
    </div>
    <p>Número do Banco: <input type="text" id="campoNumeroBanco"></p>
    <p>Agência: <input type="text" id="campoNumeroAgencia"></p>
    <p>Número da Conta: <input type="text" id="campoNumeroConta"></p>
    <button id="btnAtualizarConta">Atualizar Conta</button>`;
    formulario.innerHTML=strHtml;
    imprimaNomeAtualizar();
}

function leiaDados(){
    let strDados = localStorage.getItem('db');
    let objDados = {};
    if(strDados){
        objDados=JSON.parse(strDados);
    }
    else {
        alert("Não existe objeto no LocalStorage!");
    }
    return objDados;
}

function salveDados (dados){
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluaConta(){
    let objDados=leiaDados();
    //Nova Conta
    let strNumBanco = document.querySelector('input#campoNumeroBanco').value;
    let strAgencia = document.querySelector('input#campoNumeroAgencia').value;
    let strConta = document.querySelector('input#campoNumeroConta').value;
    let selectElement = document.querySelector('select.formulario-cadastrar');
    let nome = selectElement.value;
    let ERRO = false;
    for(let i = 0; i < objDados.dados.contasBancarias.length;i++){
        if((objDados.dados.contasBancarias[i].nome == nome) || (nome == 'Selecione seu Nome')){
            ERRO = true;
        };
    }
    let id;
    
    if(ERRO){
        alert('O Nome já está cadastrado!');
    }
    else{
        id = idNome(nome,objDados);
        let novaConta = {
            nome: nome,
            id: id,
            nBanco: strNumBanco,
            nAgencia: strAgencia,
            nConta: strConta,
        };
        objDados.dados.contasBancarias.push(novaConta);
        //Salvar Dados
        salveDados(objDados);
        //Atualizar Página
        imprimaTabela();
    }
}

function atualizeConta(){
    let objDados=leiaDados();
    //Atualização de dados
    let novoNumBanco=document.getElementById('campoNumeroBanco').value;
    let novoNumAgencia=document.getElementById('campoNumeroAgencia').value;
    let novoNumConta=document.getElementById('campoNumeroConta').value;
    let selectElement=document.querySelector('select.formulario-atualizar');
    let nome=selectElement.value;
    let ERRO=(nome=='Selecione seu Nome');
    if(ERRO){
        alert('Por favor selecione o seu Nome!');
    }
    else{
        let id = idNome(nome,objDados);
        let dadosAtualizados={
            nome: nome,
            id: id,
            nBanco: novoNumBanco,
            nAgencia: novoNumAgencia,
            nConta: novoNumConta,
        };
        let i=0;
        while(objDados.dados.contasBancarias[i].nome!=nome){
            i++;
        }
        objDados.dados.contasBancarias[i]=dadosAtualizados;
        //Salve Atualização
        salveDados(objDados);
        //Imprima Nova Tabela
        imprimaTabela();
    }
}

function idNome(nome,objDados){
    let c = 0;
    let id = objDados.dados.contas[c].id;
    while(objDados.dados.contas[c].nome != nome){
        c++;
        id = objDados.dados.contas[c].id;
    };
    return id;
}

function imprimaTabela(){
    let tela=document.getElementById('tela');
    let strHtml=`<table><tr><th>ID do Cliente</th><th>Banco</th><th>Agência</th><th>Conta</th></tr>`;
    let objDados=leiaDados();
    for(let i = 0; i < objDados.dados.contasBancarias.length;i++){
        strHtml+=`<tr><td>${objDados.dados.contasBancarias[i].nome}</td><td>${objDados.dados.contasBancarias[i].nBanco}</td><td>${objDados.dados.contasBancarias[i].nAgencia}</td><td>${objDados.dados.contasBancarias[i].nConta}</td></tr>`;
    }
    strHtml+=`</table>`;
    tela.innerHTML=strHtml;
}


function escondaDados(){
    let tela=document.getElementById('tela');
    let strHtml='';
    tela.innerHTML=strHtml;
}



// Script Botões

document.getElementById('btnCarregaDados').addEventListener('click',imprimaTabela);
document.getElementById('btnEscondeDados').addEventListener('click', escondaDados);
document.querySelector('button#btnCadastrar').addEventListener('click', function (){
    imprimaFormularioCadastro();
    document.querySelector('button#btnIncluirConta').addEventListener('click', incluaConta);
});
document.getElementById('btnAtualizar').addEventListener('click', function (){
    imprimaFormularioAtualizar();
    document.getElementById('btnAtualizarConta').addEventListener('click', atualizeConta);
});
//document.getElementById('alerta').addEventListener('click', alerta);

/*Teste Bobo
function imprimaFormulario(){
    let formulario=document.getElementById('formularioContas');
    let strHtml='';
    strHtml='<p>Qual o seu ID de Cliente? <input type="text" id="campoIdCliente"></p>'+'<p>Número do Banco: <input type="text" id="campoNumeroBanco"></p>'+'<p>Agência: <input type="text" id="campoNumeroAgencia"></p>'+'<p>Número da Conta: <input type="text" id="campoNumeroConta"></p>'+'<button id="btnIncluirConta">Salvar Conta</button>';
    formulario.innerHTML=strHtml;
    
}
document.getElementById('formularioContas').addEventListener('load', imprimaFormulario);*/



