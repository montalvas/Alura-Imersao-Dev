var listaFilmes = []
var mostrarFilmes = document.getElementById('listaFilmes')

function adicionarFilme() {
  var link = document.getElementById('imagemFilme').value
  var name = document.getElementById('nomeFilme').value
  var achouFilme = false

  for (filme in listaFilmes) {
    if (listaFilmes[filme].includes(name)) {
      alert('Filme ou imagem já existe no catálogo')
      achouFilme = true
    }
  }

  if (achouFilme == false) {
    listaFilmes.push([name, link])
    mostrarFilmes.innerHTML += `
    <figure>
	    <img src="${link}">
	    <figcaption>${name}</figcaption>
      <button onClick="deletarImagem(this)">Excluir</button>
    </figure>
    `
  }
  
}

function deletarImagem($this) {
  var element = $this
  console.log(element.parent)
}