var cartas = [
    {
        nome: 'Luffy',
        imagem: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/01/legiao_q3Q625ZmfibO.jpg.jpeg',
        atributos: {
            atk: 70,
            def: 60,
            vel: 40,
            esp: 30
        }
    },
    {
        nome: 'Zoro',
        imagem: 'https://sm.ign.com/t/ign_br/screenshot/default/blob_va9k.h720.jpg',
        atributos: {
            atk: 80,
            def: 20,
            vel: 30,
            esp: 70
        }
    },
    {
        nome: 'Sanji',
        imagem: 'https://criticalhits.com.br/wp-content/uploads/2019/01/one-piece-sanji-1102394-1280x0.jpeg',
        atributos: {
            atk: 50,
            def: 50,
            vel: 70,
            esp: 40
        }
    },
    {
        nome: 'Shanks',
        imagem: 'https://criticalhits.com.br/wp-content/uploads/2020/12/Shanks-1.jpg',
        atributos: {
            atk: 80,
            def: 20,
            vel: 80,
            esp: 20
        }
    },
    {
        nome: 'Barba Negra',
        imagem: 'https://uploads.spiritfanfiction.com/fanfics/capitulos/201912/one-piece-e-filosofia-18134765-201220192234.jpg',
        atributos: {
            atk: 90,
            def: 10,
            vel: 40,
            esp: 60
        }
    }
]

var cartaComputador
var cartaJogador

function sortearCarta() {
    numeroCartaComputador = parseInt(Math.random() * cartas.length)
    cartaComputador = cartas[numeroCartaComputador]
    while (true) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length)
        if (numeroCartaJogador != numeroCartaComputador) {
            cartaJogador = cartas[numeroCartaJogador]
            break
        }
    }
    botaoSortear = document.getElementById('btnSortear').disabled = true
    botaoJogar = document.getElementById('btnJogar').disabled = false
    exibirCartaJogador()
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador')
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">'

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoes = ""

    for (var atributo in cartaJogador.atributos) {
        opcoes += `<input type="radio" name="atributo" value="${atributo}"></input>${atributo}: ${cartaJogador.atributos[atributo]}<br>`
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoes + "</div>"
}

function exibirCartaMaquina() {
    var divCartaComputador = document.getElementById('carta-maquina')
    divCartaComputador.style.backgroundImage = `url(${cartaComputador.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">'

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoes = ""

    for (var atributo in cartaComputador.atributos) {
        opcoes += `<input type="radio" name="atributo" value="" disabled="true"></input>${atributo}: ${cartaComputador.atributos[atributo]}<br>`
    }

    var nome = `<p class="carta-subtitle">${cartaComputador.nome}</p>`

    divCartaComputador.innerHTML = moldura + nome + tagHTML + opcoes + "</div>"
}

function obterAtributoSelecionado() {
    var radioInputs = document.getElementsByName("atributo")
    for (radioInput of radioInputs) {
        if (radioInput.checked == true) {
            return radioInput.value
        }
    }
}

function jogar() {
    var atributoSelecionado = obterAtributoSelecionado()
    if (atributoSelecionado == undefined) {
        alert("Você deve selecionar um atributo!")
    } else {
        var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
        var valorCartaComputador = cartaComputador.atributos[atributoSelecionado]

        if (valorCartaJogador > valorCartaComputador) {
            resultado = '<p class="resultado-final">Venceu</p>'
        } else if (valorCartaJogador < valorCartaComputador) {
            resultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            resultado = '<p class="resultado-final">Empatou</p>'
        }

        var divResultado = document.getElementById('resultado')
        divResultado.innerHTML = resultado

        document.getElementById("btnJogar").disabled = true
        exibirCartaMaquina()
    }
    
}
