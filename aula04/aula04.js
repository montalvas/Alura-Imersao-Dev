posters = ['https://images4.alphacoders.com/128/128706.png',
'https://images.alphacoders.com/846/thumb-1920-84631.jpg',
'https://images7.alphacoders.com/469/thumb-1920-469029.jpg']

galeria = document.getElementById('galeria')

for (poster in posters) {
  galeria.innerHTML += `<img src="${posters[poster]}">` //Adiciona os elementos html na div galeria
}

function Enviar() {
  linkImagem = document.getElementById('link').value //pega o link do input

  if (posters.includes(linkImagem)) {
    alert('Imagem já existe')
  } else {
    posters.push(linkImagem)
    galeria.innerHTML += `<img src="${linkImagem}">`
  }
  //verifica se existe o link no array, caso não ele adiciona no array e depois insere o elemento HTML
}

