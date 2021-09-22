var cartas = [
    {
        nome: 'luffy',
        atributos: {
            ataque: 70,
            defesa: 60,
            velocidade: 40,
            especial: 30
        }
    },
    {
        nome: 'zoro',
        atributos: {
            ataque: 80,
            defesa: 20,
            velocidade: 30,
            especial: 70
        }
    },
    {
        nome: 'sanji',
        atributos: {
            ataque: 50,
            defesa: 50,
            velocidade: 70,
            especial: 40
        }
    },
    {
        nome: 'shanks',
        atributos: {
            ataque: 80,
            defesa: 20,
            velocidade: 80,
            especial: 20
        }
    },
    {
        nome: 'barba negra',
        atributos: {
            ataque: 90,
            defesa: 10,
            velocidade: 40,
            especial: 60
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
    exibirOpcoes()
}

function exibirOpcoes() {
    div = document.getElementById('opcoes')
    
    for (var atributo in cartaJogador.atributos) {
        opcoes.innerHTML += `<input type="radio" name="atributo" value="${atributo}">${atributo}</input>`
    }
}