function contar() {
    var ninicio = document.getElementById('ninicio')
    var nfim = document.querySelector('input#nfim')
    var npasso = document.getElementById('npasso')
    var nresultado = document.getElementById('resultado')

 

    if ( ninicio.value.length == 0 || nfim.value.length == 0 || npasso.value.length == 0 ) {
        resultado.innerHTML = 'Impossivel contar!'
    } else if (npasso == 0) {
        npasso = 1
        window.alert(`Passo invalido! Conssiderando PASSO ${npasso}`)
    } else {
        resultado.innerHTML = `Contando: <br>`
        let i = Number(ninicio.value)
        let f = Number(nfim.value)
        let p = Number(npasso.value)

        if (i < f) {
            // Contagem crescente
            var c = i
            while (c <= f) {
                resultado.innerHTML += `${c} \u{1F449}`
                c += p
            }
        } else {
            // Contagem decrescente
            var c = i
            while (c >= f) {
                resultado.innerHTML += `${c} \u{1F449}`
                c -= p
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
        
    }
}