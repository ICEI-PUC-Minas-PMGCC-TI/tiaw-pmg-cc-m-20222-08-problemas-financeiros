class Pessoa{
    constructor(){
        this.id = 1;
        this.arrayPessoas = [];
    }

    salvar(){
       let pessoa = this.lerdados();

      if(this.validaCampos(pessoa)){
        this.adicionar(pessoa);
      }

       this.listaTabela();
    }

    adicionar(pessoa){
        this.arrayPessoas.push(pessoa);
        this.id++;
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayPessoas.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_pessoa = tr.insertCell();
            let td_valor = tr.insertCell();

            td_id.innerText = this.arrayPessoas[i].id;
            td_pessoa.innerText = this.arrayPessoas[i].nomePessoa;
            td_valor.innerText = this.arrayPessoas[i].valor;
        }
    }

    lerdados(){
        let pessoa = {}

        pessoa.id = this.id;
        pessoa.nomePessoa = document.getElementById('pessoa').value;
        pessoa.valor = document.getElementById('valor').value;
        
        return pessoa;
    }

    validaCampos(pessoa){
        let msg = '';

        if(pessoa.nomePessoa == ''){
            msg += '- Informe o nome da pessoa \n'
        }

        if(pessoa.valor == ''){
            msg += '- Informe o valor do saldo \n'
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true;
    }

    cancelar(){
       
    }

}

var pessoa = new Pessoa();