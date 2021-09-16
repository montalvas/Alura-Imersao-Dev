posters = ['https://images4.alphacoders.com/128/128706.png',
'https://images.alphacoders.com/846/thumb-1920-84631.jpg',
'https://images7.alphacoders.com/469/thumb-1920-469029.jpg']

galeria = document.getElementById('galeria')


for (poster in posters) {
  galeria.innerHTML += `<img src="${posters[poster]}">`
}

function Enviar() {
  linkImagem = document.getElementById('link').value
  galeria.innerHTML += `<img src="${linkImagem}">`
}