// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
    alert(`Não existe objeto no LocalStorage!`);
};


// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
  $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = 1;
  if (db.dados.contas.length != 0)
    novoId = db.dados.contas[db.dados.contas.length - 1].id + 1;
  let novoContato = {
    "id": novoId,
    "nome": contato.nome,
    "email": contato.email,
    "telefone": contato.telefone,
    "cidade": contato.cidade,
    "categoria": contato.categoria
  };

  // Insere o novo objeto no array
  db.dados.contas.push(novoContato);
  displayMessage("Contato inserido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db', JSON.stringify(db));
}

function updateContato(id, contato) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.dados.contas.map(obj => obj.id).indexOf(id);

  // Altera os dados do objeto no array
  db.dados.contas[index].nome = contato.nome,
    db.dados.contas[index].email = contato.email,
    db.dados.contas[index].telefone = contato.telefone,
    db.dados.contas[index].cidade = contato.cidade,
    db.dados.contas[index].categoria = contato.categoria

  displayMessage("Contato alterado com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db', JSON.stringify(db));
}

function deleteContato(id) {
  // Filtra o array removendo o elemento com o id passado
  db.dados.contas = db.dados.contas.filter(function(element) { return element.id != id });

  displayMessage("Contato removido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db', JSON.stringify(db));
}