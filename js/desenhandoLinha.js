var linha

function desenharLinha() {
    let lugares = document.querySelectorAll('.botao')

    var pos0 = lugares[0].getBoundingClientRect();
    var pos1 = lugares[1].getBoundingClientRect();
    var pos2 = lugares[2].getBoundingClientRect();
    var pos3 = lugares[3].getBoundingClientRect();
    var pos4 = lugares[4].getBoundingClientRect();
    var pos5 = lugares[5].getBoundingClientRect();
    var pos6 = lugares[6].getBoundingClientRect();
    var pos7 = lugares[7].getBoundingClientRect();
    var pos8 = lugares[8].getBoundingClientRect();

    if (((lugares[0].textContent == 'X') && (lugares[3].textContent == 'X') && (lugares[6].textContent == 'X'))
    || ((lugares[0].textContent == 'O') && (lugares[3].textContent == 'O') && (lugares[6].textContent == 'O'))) {
        if (linha) {
            document.body.removeChild(linha)
          }
        linha = document.createElement('div')
        linha.style.position = 'absolute'
        linha.style.top = pos0.top + 'px'
        linha.style.left = (pos0.left + pos0.width / 2) + 'px'
        linha.style.width = '2px'
        linha.style.height = (pos6.bottom - pos0.top) + 'px'
        linha.style.backgroundColor = '#FCFDF2'

        document.body.appendChild(linha)
    }
    
    else if (((lugares[1].textContent == 'X') && (lugares[4].textContent == 'X') && (lugares[7].textContent == 'X'))
    || ((lugares[1].textContent == 'O') && (lugares[4].textContent == 'O') && (lugares[7].textContent == 'O'))) {
        if (linha) {
            document.body.removeChild(linha)
          }
        linha = document.createElement('div')
        linha.style.position = 'absolute'
        linha.style.top = pos1.top + 'px'
        linha.style.left = (pos1.left + pos1.width / 2) + 'px'
        linha.style.width = '2px'
        linha.style.height = (pos7.bottom - pos1.top) + 'px'
        linha.style.backgroundColor = '#FCFDF2'

        document.body.appendChild(linha)
    }

    else if (((lugares[2].textContent == 'X') && (lugares[5].textContent == 'X') && (lugares[8].textContent == 'X'))
    || ((lugares[2].textContent == 'O') && (lugares[5].textContent == 'O') && (lugares[8].textContent == 'O'))) {
        if (linha) {
            document.body.removeChild(linha)
          }
        linha = document.createElement('div')
        linha.style.position = 'absolute'
        linha.style.top = pos2.top + 'px'
        linha.style.left = (pos2.left + pos2.width / 2) + 'px'
        linha.style.width = '2px'
        linha.style.height = (pos8.bottom - pos2.top) + 'px'
        linha.style.backgroundColor = '#FCFDF2'

        document.body.appendChild(linha)
    }

    else if (((lugares[0].textContent == 'X') && (lugares[1].textContent == 'X') && (lugares[2].textContent == 'X'))
    || ((lugares[0].textContent == 'O') && (lugares[1].textContent == 'O') && (lugares[2].textContent == 'O'))) {
        if (linha) {
            document.body.removeChild(linha)
          }
          linha = document.createElement('div')
          linha.style.position = 'absolute'
          linha.style.top = (pos0.top + pos0.height / 2) + 'px'
          linha.style.left = pos0.left + 'px'
          linha.style.width = (pos2.right - pos0.left) + 'px'
          linha.style.height = '2px'
          linha.style.backgroundColor = '#FCFDF2'

        document.body.appendChild(linha)
    }

    else if (((lugares[3].textContent == 'X') && (lugares[4].textContent == 'X') && (lugares[5].textContent == 'X'))
    || ((lugares[3].textContent == 'O') && (lugares[4].textContent == 'O') && (lugares[5].textContent == 'O'))) {
        if (linha) {
            document.body.removeChild(linha)
          }
          linha = document.createElement('div')
          linha.style.position = 'absolute'
          linha.style.top = (pos3.top + pos3.height / 2) + 'px'
          linha.style.left = pos3.left + 'px'
          linha.style.width = (pos5.right - pos3.left) + 'px'
          linha.style.height = '2px'
          linha.style.backgroundColor = '#FCFDF2'

        document.body.appendChild(linha)
    }

    else if (((lugares[6].textContent == 'X') && (lugares[7].textContent == 'X') && (lugares[8].textContent == 'X'))
    || ((lugares[6].textContent == 'O') && (lugares[7].textContent == 'O') && (lugares[8].textContent == 'O'))) {
        if (linha) {
            document.body.removeChild(linha)
          }
          linha = document.createElement('div')
          linha.style.position = 'absolute'
          linha.style.top = (pos6.top + pos6.height / 2) + 'px'
          linha.style.left = pos6.left + 'px'
          linha.style.width = (pos8.right - pos6.left) + 'px'
          linha.style.height = '2px'
          linha.style.backgroundColor = '#FCFDF2'

        document.body.appendChild(linha)
    }

    else if (((lugares[0].textContent == 'X') && (lugares[4].textContent == 'X') && (lugares[8].textContent == 'X'))
    || ((lugares[0].textContent == 'O') && (lugares[4].textContent == 'O') && (lugares[8].textContent == 'O'))) {
        if (linha) {
            document.body.removeChild(linha)
          }
          linha = document.createElement('div')
          linha.style.position = 'absolute'
          linha.style.transform = 'rotate(45deg)'
          const diagonalLength = Math.sqrt(Math.pow(pos8.right - pos0.left, 2) + Math.pow(pos8.bottom - pos0.top, 2))
          const offsetTop = -250
          const offsetLeft = 40
          linha.style.top = (pos0.top + pos0.height / 2 - diagonalLength / 2 * Math.sin(Math.PI / 4) - offsetTop) + 'px'
          linha.style.left = (pos0.left + pos0.width / 2 - diagonalLength / 2 * Math.cos(Math.PI / 4) + offsetLeft) + 'px'
          linha.style.width = diagonalLength + 'px'
          linha.style.height = '2px'
          linha.style.backgroundColor = '#FCFDF2'

        document.body.appendChild(linha)
    }

    else if (((lugares[2].textContent == 'X') && (lugares[4].textContent == 'X') && (lugares[6].textContent == 'X'))
    || ((lugares[2].textContent == 'O') && (lugares[4].textContent == 'O') && (lugares[6].textContent == 'O'))) {
        if (linha) {
            document.body.removeChild(linha)
          }
          linha = document.createElement('div')
          linha.style.position = 'absolute'
          linha.style.transform = 'rotate(-45deg)'
          const diagonalLength = Math.sqrt(Math.pow(pos6.left - pos2.right, 2) + Math.pow(pos6.bottom - pos2.top, 2))
          const offsetTop = -45
          const offsetLeft = 40
          linha.style.top = (pos6.top + pos6.height / 2 - diagonalLength / 2 * Math.sin(Math.PI / 4) - offsetTop) + 'px'
          linha.style.left = (pos6.left + pos6.width / 2 - diagonalLength / 2 * Math.cos(Math.PI / 4) + offsetLeft) + 'px'
          linha.style.width = diagonalLength + 'px'
          linha.style.height = '2px'
          linha.style.backgroundColor = '#FCFDF2'

        document.body.appendChild(linha)
    }
}

window.addEventListener('resize', function() {
  desenharLinha()
})