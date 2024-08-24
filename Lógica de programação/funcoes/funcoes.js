/**
 * 
 * declarando e chamando
 * uma função simples
 */

function soma() {
    return 2 + 3
}

console.log("Função de adição: " + soma());

function subtracao() {
    return 4 - 2
}

console.log("Subtração: " + subtracao())

function somaComValores(valor1, valor2) {
    return valor1 + valor2
}
//precisa colocar o valor no console quando está fazendo um calculo com função
console.log("Adição com função: " + somaComValores(3, 3))

function divisao(valor1, valor2) {
    return valor1 / valor2
}

console.log("A divisão é: " + divisao(4, 4))


/**
 * 
 */

function getSizes(alt, lar, com) {
    let area = alt * lar
    let volume = alt * lar * com
    let sizes = [area, volume, alt, lar, com]
    return sizes
}

console.log("\n\n")
console.log("Lista")
console.log(getSizes(3,3,2))
console.log(getSizes(3,3,2)[0])
console.log(getSizes(3,3,2)[1])
console.log(getSizes(3,3,2)[2])
console.log(getSizes(3,3,2)[3])
console.log(getSizes(3,3,2)[4])
console.log("\n\n")

/**
 * função que chama fruta e retorn a doce ou salgada
 */
let fruta, abacaxi, morango, limao



function fruits(fruta) {
    let text = ""

    if (fruta == 'abacaxi') {
        text = 'Docinho esse abacaxi'
    }
    else if (fruta == 'morango') {
        text = 'hmmm bolo de murango'
    } else if (fruta == 'limao') {
        text = 'azedinho'
    } else {
        console.log('Não sei tratar essa fruta')
    }

    return text
}

console.log(fruits('limao'));

// function adivinhaNumero(num) {

//     let text = ""

//     if (num == 10) {
//         text = "acertou!"
//     } else if (num == 15) {
//         text = "acertou!"
//     } else if (num == 20) {
//         text = "acertou!"
//     } else {
//         console.log("Errou o valor")
//     }

//     return text
// }

// console.log("Escreva um número de 1 a 20\nAqui está o resultado do sorteio do seu número:")
// console.log(adivinhaNumero(10))

let painho = "jose"
console.log(`${painho}` + "é o teu pai")



function Adivinhamento(num) {
   
   let tex = ""

    if(num == 10 || num == 15 || num == 20) {
        tex = "acertou o número!"
    } else {
        tex = "errou! tente novamente"
    }

    return tex
}

console.log(Adivinhamento(10));


//para lista

console.log("\n\n")
console.log("Lista")
console.log(getSizes(3,3,2))
console.log(getSizes(3,3,2)[0])
console.log(getSizes(3,3,2)[1])
console.log("\n\n")


