function Converter() {
  //console.log('Clicou') a função se conecta com o atributado do input 'onclick'
  var valorElemento =  parseFloat(document.getElementById('valor').value);
  var valorEmDolar = valorElemento/5.25;
  console.log(valorEmDolar);
}