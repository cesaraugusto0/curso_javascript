
let num = document.getElementById('txtnumero')
let lista = document.getElementById('selnumeros')
let res = document.getElementById('resultado')
let valores = []

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100
}

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}


function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            maior = valores[pos] > maior ? valores[pos] : maior
            menor = valores[pos] < menor ? valores[pos] : menor
            soma += valores[pos]
        }
        media = soma / tot

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${tot} números adicionados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi  ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi  ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}