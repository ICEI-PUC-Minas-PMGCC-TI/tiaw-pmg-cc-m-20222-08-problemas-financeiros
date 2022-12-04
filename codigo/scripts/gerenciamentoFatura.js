this.somaTotal = 0;
this.id = 1;
this.arrayProdutos = [];
this.editId = null;

let data = [
  {
    id: undefined,
    nome: undefined,
    preco: undefined
  }
]


function salvar() {
  let produto = this.lerDados();
  if (this.validaCampos(produto)) {
    if (this.editId == null) {
      this.adicionar(produto);
    } else {
      this.atualizar(this.editId, produto);
    }
  }
  this.listaTabela();
  this.cancelar();
  this.valorTotalfunction();
}

function listaTabela() {
  let tbody = document.getElementById("tbody");
  tbody.innerText = "";

  for (let i = 0; i < this.arrayProdutos.length; i++) {
    let tr = tbody.insertRow();

    let td_id = tr.insertCell();
    let td_produto = tr.insertCell();
    let td_valor = tr.insertCell();
    let td_acoes = tr.insertCell();

    td_id.innerText = this.arrayProdutos[i].id;
    td_produto.innerText = this.arrayProdutos[i].nomeProduto;
    td_valor.innerText = this.arrayProdutos[i].preco;

    td_id.classList.add("center");

    let imgEdit = document.createElement("img");
    imgEdit.src = "./components/images/editar.png";
    imgEdit.setAttribute(
      "onclick",
      "preparaEditacao(" + JSON.stringify(this.arrayProdutos[i]) + ")"
    );

    let imgDelete = document.createElement("img");
    imgDelete.src = "./components/images/excluir.png";
    imgDelete.setAttribute(
      "onclick",
      "deletar(" + this.arrayProdutos[i].id + ")"
    );

    td_acoes.appendChild(imgEdit);
    td_acoes.appendChild(imgDelete);
  }
}

function valorTotalfunction() {
  let tfoot = document.getElementById("tfoot");
  tfoot.innerText = "";
  let tr = tfoot.insertRow();

  tr.insertCell();
  tr.insertCell();
  let td_label = tr.insertCell();
  td_label.classList.add("footer");
  td_label.innerText = "TOTAL DA FATURA:R$";

  let td_soma = tr.insertCell();
  td_soma.innerText = this.somaTotal;
}

function adicionar(produto) {
  produto.preco = parseFloat(produto.preco);
  this.arrayProdutos.push(produto);
  this.id++;
  this.somaTotal += produto.preco;
}

function atualizar(id, produto) {
  for (let i = 0; i < this.arrayProdutos.length; i++) {
    if (this.arrayProdutos[i].id == id) {
      this.somaTotal -= +this.arrayProdutos[i].preco;
      this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
      this.arrayProdutos[i].preco = produto.preco;
      this.somaTotal += +this.arrayProdutos[i].preco;
    }
  }
}

function preparaEditacao(dados) {
  this.editId = dados.id;

  document.getElementById("produto").value = dados.nomeProduto;
  document.getElementById("preco").value = dados.preco;

  document.getElementById("btn1").innerText = "Atualizar";
}

function lerDados() {
  let produto = {};
  produto.id = this.id;
  produto.nomeProduto = document.getElementById("produto").value;
  produto.preco = document.getElementById("preco").value;
  return produto;
}

function validaCampos(produto) {
  let msg = "";

  if (produto.nomeProduto == "") {
    msg += "- Informe o nome do produto \n";
  }

  if (produto.preco == "") {
    msg += "- Informe o preco do produto \n";
  }

  if (msg != "") {
    alert(msg);
    return false;
  }

  return true;
}

function cancelar() {
  document.getElementById("produto").value = "";
  document.getElementById("preco").value = "";

  document.getElementById("btn1").innerText = "Salvar";
  this.editId = null;
}

function deletar(id) {
  if (confirm("Deseja realmente deletar o produto do ID " + id + " ? ")) {
    let tbody = document.getElementById("tbody");
    for (let i = 0; i < this.arrayProdutos.length; i++) {
      if (this.arrayProdutos[i].id == id) {
        this.arrayProdutos.splice(i, 1);
        tbody.deleteRow(i);
      }
    }
  }
}
