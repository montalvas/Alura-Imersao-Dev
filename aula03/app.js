var numeroSorteado = getRandomInt(0, 10);
var tentativas = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Chutar() {
  tentativas++;
  var valorChute = parseInt(document.getElementById('valor').value);
  
  if (valorChute == numeroSorteado) {
    alert('Parabéns você acertou com ' + tentativas + ' tentativas!');
  } else {
    if (valorChute > numeroSorteado) {
      alert('Valor maior que número sorteado.')
    } else {
      alert('Valor menor que número sorteado.')
    }
  }
}