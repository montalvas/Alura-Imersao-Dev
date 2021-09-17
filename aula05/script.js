var listaFilmes = []
var idFilme = 0
var mostrarFilmes = document.getElementById('listaFilmes')

function adicionarFilme() {
  var link = document.getElementById('imagemFilme').value
  var name = document.getElementById('nomeFilme').value
  var achouFilme = false

  if (link.endsWith('.jpg')) {
    for (filme in listaFilmes) {
      if (listaFilmes[filme].includes(name) || listaFilmes[filme].includes(link)) {
        alert('Filme ou imagem já existe no catálogo')
        achouFilme = true
      }
    }

    /*
    Primeiro executa um loop para procurar se o nome da imagem ou o link já existe no array
    Assim eu faço o controle das imagens pelo nome/link presente no array
    Caso sim, ele exibe um aviso
    Caso não, a variável de condição 'achouFilme' continua falsa
    */

    if (achouFilme == false) {
      listaFilmes.push([name, link])
      mostrarFilmes.innerHTML += `
      <figure class="${idFilme}">
        <img src="${link}">
        <figcaption>${name}</figcaption>
        <button onClick="deletarImagem(this)">Excluir</button>
      </figure>
      `
      idFilme++
    }
  } else {
    console.error("Endereço inválido")
  }

  /*
  Caso a variável seja falsa, ele adiciona o filme no array e no html
  */
  
}

function deletarImagem($this) {
  var filme = $this.parentElement
  listaFilmes.splice(listaFilmes.indexOf(parseInt(filme.className)), 1)
  filme.remove()
}

/*
Ao clicar no botão ele pega o elemento pai 'figure' e remove do array de imagens
O controle é feito pelo nnome da classe, atribuida dinamicamente, presente no figure
Em seguida exclui o HTML
*/