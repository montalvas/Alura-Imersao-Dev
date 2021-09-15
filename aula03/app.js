var numeroSorteado = parseInt(Math.random() * 11)
var tentativas = 0;

function Chutar() {
  tentativas++;
  var valorChute = parseInt(document.getElementById('valor').value);
  var elementoResultado = document.getElementById('resultado')
  
  if (valorChute > 10 || valorChute < 0) {
    elementoResultado.innerHTML = 'Chute inválido, entre com um número de 0 a 10.'
  } else {
    if (valorChute == numeroSorteado) {
      elementoResultado.innerHTML = 'Parabéns você acertou com ' + tentativas + ' tentativas!';
    } else {
      if (valorChute > numeroSorteado) {
        alert('Valor maior que número sorteado.')
      } else {
        alert('Valor menor que número sorteado.')
      }
    }
  }
}