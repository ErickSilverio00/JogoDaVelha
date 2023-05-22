const escolhaDeSimbolo = document.querySelectorAll('.botoes-escolha h2')
const blocoJogo = document.querySelector('.bloco-jogo')
const escolhaSumir = document.querySelector('.escolher-X-ou-O')

function jogoAcontecendo() {
    escolhaDeSimbolo.forEach(function (simbolo) {
        simbolo.addEventListener("click", function() {
            simboloEscolhido = simbolo.getAttribute('data-simbolo')
            blocoJogo.innerHTML = `
            <div class="primeira-linha">
                <div class="botao1"><button class="botao botao-1" id="botao-1"></button></div>
                <div class="botao2"><button class="botao botao-2" id="botao-2"></button></div>
                <div class="botao3"><button class="botao botao-3" id="botao-3"></button></div>                
            </div>
            <div class="segunda-linha">
                <div class="botao4"><button class="botao botao-4" id="botao-4"></button></div>
                <div class="botao5"><button class="botao botao-5" id="botao-5"></button></div>
                <div class="botao6"><button class="botao botao-6" id="botao-6"></button></div>
            </div>
            <div class="terceira-linha">
                <div class="botao7"><button class="botao botao-7" id="botao-7"></button></div>
                <div class="botao8"><button class="botao botao-8" id="botao-8"></button></div>
                <div class="botao9"><button class="botao botao-9" id="botao-9"></button></div>
            </div>`
            escolhaSumir.innerHTML = ""
            escolherLugar()
        })
    })        
}

function recomecarJogo() {
    document.body.addEventListener('click', e => {
        if (e.target.id == 'jogar-novamente') {
            window.location.reload()
        }
    })
}

jogoAcontecendo()
recomecarJogo()