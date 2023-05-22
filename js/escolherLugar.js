let simboloEscolhido
let ultimoSimbolo

function escolherLugar() {
    let lugares = document.querySelectorAll('.botao')
    lugares.forEach(function (lugar) {
        lugar.addEventListener("click", function() {
            while (lugar.textContent == "") {
                if (simboloEscolhido == 'X') {
                    if (ultimoSimbolo === 'O' || !ultimoSimbolo) {
                        lugar.innerHTML = 'X'
                        ultimoSimbolo = 'X'
                    } else {
                        lugar.innerHTML = 'O'
                        ultimoSimbolo = 'O'
                    }
                } else {
                    if (ultimoSimbolo === 'X' || !ultimoSimbolo) {
                        lugar.innerHTML = 'O'
                        ultimoSimbolo = 'O'
                    } else {
                        lugar.innerHTML = 'X'
                        ultimoSimbolo = 'X'
                    }
                }
            }    
            verificarResultado()                    
        })
    })
}