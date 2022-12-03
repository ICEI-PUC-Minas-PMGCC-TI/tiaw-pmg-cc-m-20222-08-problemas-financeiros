// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
    alert(`Não existe objeto no LocalStorage!`);
};


// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
  $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function insertContato(contato) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = generateUUID();
  let novoContato = {
    id: novoId,
    nome: contato.nome,
    email: contato.email,
    telefone: contato.telefone,
    cidade: contato.cidade,
    categoria: contato.categoria
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