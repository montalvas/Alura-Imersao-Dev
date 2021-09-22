var cartas = [
    {
        nome: 'Luffy',
        imagem: 'https://ergzzi23nrs.exactdn.com/wp-content/uploads/2021/06/luffy.png',
        atributos: {
            ataque: 70,
            defesa: 60,
            velocidade: 40,
            especial: 30
        }
    },
    {
        nome: 'Zoro',
        imagem: 'https://img.ibxk.com.br/2019/04/17/17224557884005.jpg?w=1200&h=675&mode=crop&scale=both',
        atributos: {
            ataque: 80,
            defesa: 20,
            velocidade: 30,
            especial: 70
        }
    },
    {
        nome: 'Sanji',
        imagem: 'https://criticalhits.com.br/wp-content/uploads/2019/01/one-piece-sanji-1102394-1280x0.jpeg',
        atributos: {
            ataque: 50,
            defesa: 50,
            velocidade: 70,
            especial: 40
        }
    },
    {
        nome: 'Shanks',
        imagem: 'https://criticalhits.com.br/wp-content/uploads/2020/12/Shanks-1.jpg',
        atributos: {
            ataque: 80,
            defesa: 20,
            velocidade: 80,
            especial: 20
        }
    },
    {
        nome: 'Barba Negra',
        imagem: 'https://uploads.spiritfanfiction.com/fanfics/capitulos/201912/one-piece-e-filosofia-18134765-201220192234.jpg',
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
    var divOpcoes = document.getElementById('opcoes')
    var opcoes

    opcoes = `
        <table>
            <thead>
                <tr>
                    <th>${cartaJogador.nome}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="${cartaJogador.imagem}"/></td>
                </tr>
        `
    
    for (var atributo in cartaJogador.atributos) {
        opcoes += `
                <tr>
                    <td><input type="radio" name="atributo" value="${atributo}"><span>${atributo} : ${cartaJogador.atributos[atributo]}<span></input></td>
                </tr>
        `
    }

    opcoes += `
            </tbody>
        </table>
    `

    divOpcoes.innerHTML += opcoes
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

        var resultado = `
        <p>Jogador: ${valorCartaJogador}</p>
        <p>Computador: ${valorCartaComputador}<p>`

        if (valorCartaJogador > valorCartaComputador) {
            resultado += "<p>JOGADOR VENCEU!!</p>"
        } else if (valorCartaJogador < valorCartaComputador) {
            resultado += "<p>COMPUTADOR VENCEU!!</p>"
        } else {
            resultado += "<p>EMPATE!!</p>"
        }

        var divResultado = document.getElementById('resultado')
        divResultado.innerHTML = resultado
    }
    
}
