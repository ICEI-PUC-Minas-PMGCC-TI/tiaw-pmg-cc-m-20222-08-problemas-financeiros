/*document.getElementById('formularioContas').addEventListener('change', function (){
    atribuirBotoes();
})

function atribuirBotoes(){
    document.getElementById('btnIncluirConta').addEventListener('click', incluaConta)
    document.getElementById('btnAtualizarConta').addEventListener('click', atualizeConta)
}*/
document.querySelector('div.comprimento').innerHTML = `<h6>Olá <span>${usuarioCorrente.nome}</span></h6>`;
var objDados = leiaDados();

function possuiConta(){
    let possuiConta = false;
    for(let c = 0; c < objDados.dados.contasBancarias.length; c++){
        if(usuarioCorrente.nome == objDados.dados.contasBancarias[c].nome){
            possuiConta = true;
        }
    }
    if(possuiConta){
        document.querySelector('button#btnCadastrar').style.display = 'none';
    } else{
        document.querySelector('button#btnAtualizar').style.display = 'none';
    }
}
possuiConta();



function imprimaFormularioCadastro(){
    let formulario=document.querySelector('#formularioContas');
    let strHtml=`
        <p>Número do Banco: <input type="text" id="campoNumeroBanco"></p>
        <p>Agência: <input type="text" id="campoNumeroAgencia"></p>
        <p>Número da Conta: <input type="text" id="campoNumeroConta"></p>
        <button id="btnIncluirConta">Salvar Conta</button>`;
    formulario.innerHTML=strHtml;
}



function imprimaFormularioAtualizar(){
    let formulario=document.getElementById('formularioContas');
    let strHtml=`
    <p>Número do Banco: <input type="text" id="campoNumeroBanco"></p>
    <p>Agência: <input type="text" id="campoNumeroAgencia"></p>
    <p>Número da Conta: <input type="text" id="campoNumeroConta"></p>
    <button id="btnAtualizarConta">Atualizar Conta</button>`;
    formulario.innerHTML=strHtml;
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
    objDados;
    //Nova Conta
    let strNumBanco = document.querySelector('input#campoNumeroBanco').value;
    let strAgencia = document.querySelector('input#campoNumeroAgencia').value;
    let strConta = document.querySelector('input#campoNumeroConta').value;
    let nome = usuarioCorrente.nome;
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
        //Avisa que o cadastro foi realizado com sucesso
        alert("Conta cadastrada com sucesso!");
    }
}

function atualizeConta(){
    objDados;
    //Atualização de dados
    let novoNumBanco=document.getElementById('campoNumeroBanco').value;
    let novoNumAgencia=document.getElementById('campoNumeroAgencia').value;
    let novoNumConta=document.getElementById('campoNumeroConta').value;
    let nome=usuarioCorrente.nome;
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
        //Avisa que a conta foi atualizada com sucesso
        alert("Conta atualizada com sucesso!");
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




// Script Botões

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



