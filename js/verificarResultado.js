const finalJogo = document.querySelector('.final-jogo')
let vencedor

function verificarResultado() {
    let lugares = document.querySelectorAll('.botao')

    if (((lugares[0].textContent == 'X') && (lugares[1].textContent == 'X') && (lugares[2].textContent == 'X'))
    || ((lugares[3].textContent == 'X') && (lugares[4].textContent == 'X') && (lugares[5].textContent == 'X'))
    || ((lugares[6].textContent == 'X') && (lugares[7].textContent == 'X') && (lugares[8].textContent == 'X'))
    || ((lugares[0].textContent == 'X') && (lugares[3].textContent == 'X') && (lugares[6].textContent == 'X'))
    || ((lugares[1].textContent == 'X') && (lugares[4].textContent == 'X') && (lugares[7].textContent == 'X'))
    || ((lugares[2].textContent == 'X') && (lugares[5].textContent == 'X') && (lugares[8].textContent == 'X'))
    || ((lugares[0].textContent == 'X') && (lugares[4].textContent == 'X') && (lugares[8].textContent == 'X'))
    || ((lugares[2].textContent == 'X') && (lugares[4].textContent == 'X') && (lugares[6].textContent == 'X'))) {
        vencedor = 'X'
        mensagemFinalJogo()
        desenharLinha()
    } else if (((lugares[0].textContent == 'O') && (lugares[1].textContent == 'O') && (lugares[2].textContent == 'O'))
    || ((lugares[3].textContent == 'O') && (lugares[4].textContent == 'O') && (lugares[5].textContent == 'O'))
    || ((lugares[6].textContent == 'O') && (lugares[7].textContent == 'O') && (lugares[8].textContent == 'O'))
    || ((lugares[0].textContent == 'O') && (lugares[3].textContent == 'O') && (lugares[6].textContent == 'O'))
    || ((lugares[1].textContent == 'O') && (lugares[4].textContent == 'O') && (lugares[7].textContent == 'O'))
    || ((lugares[2].textContent == 'O') && (lugares[5].textContent == 'O') && (lugares[8].textContent == 'O'))    
    || ((lugares[0].textContent == 'O') && (lugares[4].textContent == 'O') && (lugares[8].textContent == 'O'))
    || ((lugares[2].textContent == 'O') && (lugares[4].textContent == 'O') && (lugares[6].textContent == 'O'))) {
        vencedor = 'O'
        mensagemFinalJogo()
        desenharLinha()
    }

    else if ((lugares[0].textContent != "") && (lugares[1].textContent != "") && (lugares[2].textContent != "") && (lugares[3].textContent != "") && (lugares[4].textContent != "")
    && (lugares[5].textContent != "") && (lugares[6].textContent != "") && (lugares[7].textContent != "") && (lugares[8].textContent != "")) {
       finalJogo.innerHTML = `
        <div class="mensagem">
            <h2>Ninguém ganhou!</h2>
        </div>
        <div class="botao-recomecar">
            <button class="jogar-novamente" id="jogar-novamente">Jogar novamente!</button>
        </div>` 
    }
}

function mensagemFinalJogo() {
    finalJogo.innerHTML = `
        <div class="mensagem">
            <h2>O "${vencedor}" ganhou!</h2>
        </div>
        <div class="botao-recomecar">
            <button class="jogar-novamente" id="jogar-novamente">Jogar novamente!</button>
        </div>`
}