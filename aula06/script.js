/*
* Não adicionei imagem
* Não coloquei o input para adicionar mais jogadores porque não defini uma regra válida para calcular os pontos
* Se há 3 ou mais jogadores e a disputa é entre todos, então o botão derrota não faz sentido, pois só adiciona a derrota para o jogador atual, sem definir quem foi o ganhador da partida.
* Se há 3 ou mais jogadores e a disputa é somente entre 2 deles, então preciso fazer um sistema para escolher os adversários
*/

function calculaPontos(jogador) {
    var vitorias = jogador.vitorias * 3
    var empates = jogador.empates * 1
    var pontos = vitorias + empates
    return pontos
}

function adicionarVitoria(i) {
    var vencedorPartida = listaJogadores[i]
    vencedorPartida.vitorias++
    vencedorPartida.pontos = calculaPontos(vencedorPartida)
    for (jogador of listaJogadores) {
        if (jogador == vencedorPartida) {continue}
        jogador.derrotas++
        jogador.pontos = calculaPontos(jogador)
    }
    exibirJogadoresTela(listaJogadores)
}

function adicionarEmpate() {
    for (jogador of listaJogadores) {
        jogador.empates++
        jogador.pontos = calculaPontos(jogador)
    }
    exibirJogadoresTela(listaJogadores)
}

function adicionarDerrota(i) {
    var perdedorPartida = listaJogadores[i]
    perdedorPartida.derrotas++
    for (jogador of listaJogadores) {
        if (jogador == perdedorPartida) {continue}
        jogador.vitorias++
        jogador.pontos = calculaPontos(jogador)
    }
    exibirJogadoresTela(listaJogadores)
}

var lucas = {
    nome: "Lucas",
    vitorias: 3,
    empates: 3,
    derrotas: 1,
    pontos: 0
}

var adriana = {
    nome: "Adriana",
    vitorias: 1,
    empates: 3,
    derrotas: 3,
    pontos: 0
}

var listaJogadores = [lucas, adriana]

for (jogador of listaJogadores) {
    jogador.pontos = calculaPontos(jogador)
}

function exibirJogadoresTela(jogadores) {
    var tabela = document.getElementById('tabelaJogadores')
    var linhaJogador = ""

    for (jogador of jogadores) {
        linhaJogador += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitorias}</td>
            <td>${jogador.empates}</td>
            <td>${jogador.derrotas}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria('${jogadores.indexOf(jogador)}')">Vitória</button></td>
            <td><button onClick="adicionarEmpate()">Empate</button></td>
            <td><button onClick="adicionarDerrota('${jogadores.indexOf(jogador)}')">Derrota</button></td>
        </tr>
        `
    }
    tabela.innerHTML = linhaJogador
}

exibirJogadoresTela(listaJogadores)

function zerarPlacar() {
    for (jogador of listaJogadores) {
        jogador.vitorias = 0
        jogador.derrotas = 0
        jogador.empates = 0
        jogador.pontos = 0
    }
    exibirJogadoresTela(listaJogadores)
}

