let valores = [8,1,2,3,65,7,8]

// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for (let pos in valores) {
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}