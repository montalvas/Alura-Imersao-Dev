function Converter() {
  //console.log('Clicou') a função se conecta com o atributado do input 'onclick'
  var valorElemento =  parseFloat(document.getElementById('valor').value); //pego valor input
  var cotacaoDolar = 5.25;
  var valorEmReal = valorElemento * cotacaoDolar;

  var elementoValorConvertido = document.getElementById('valorConvertido') //pego a div
  var valorConvertido = 'O resultado em real é R$ ' + valorEmReal
  
  elementoValorConvertido.innerHTML = valorConvertido

}