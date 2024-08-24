
function somarArrays(array) {
    let soma = 0

    for(let numeros of array ) {
        // soma += numeros
        soma = numeros + soma;
    }

    return soma
    }

valores = [1,2,3,4,5,10]

console.log(somarArrays(valores))