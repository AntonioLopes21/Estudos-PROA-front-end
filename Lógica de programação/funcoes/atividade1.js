
// for (let valore = 1; valore <= 10; valore++) {
//     for (let contador7 = 0; contador7 <= 10; contador7++) {
//         let multiplicacao = valore * contador7;
//         let resultado = `${valore} x ${contador7} = ${multiplicacao}`;
//         console.log(resultado);
//     }

//     console.log('');
// }


// function adicao(valor) {
//     let resultados = [];
//     for (let i = 0; i <= 10; i++) {
//         let resultado = `${valor} + ${i} = ${valor + i}`;
//         resultados.push(resultado);
//     }
//     return resultados.join('\n');
// }

// console.log(adicao(4));


// function multiplicacao(num) {
//     let valores = []
//     for (let counter = 0; counter <=10; counter ++) {
//         let solucao = `${num} x ${counter} = ${num * counter}`
//         valores.push(solucao);

//     }
//     return resultados.join('\n')
// }

// console.log(multiplicacao(2))


//contador
console.log("\n\n\n")

function mult(valor1) {
    for(let contador = 0; contador <=10; contador ++){
        console.log(`${valor1} x ${contador} = ${valor1*contador}`)
    }
    
}

mult(3)

console.log("\n\nadicao aqui")
function adic(som) {
    for(let counter = 0; counter <=10; counter ++) {
        // console.log(`${som} + ${counter} = ${som + counter}`)
        let resultado = som + counter

        console.log(som + " + " + counter + " = " + resultado)
    }

    
}


adic(4)


//próxima atividade
//atividade 2 
//informe na função qual numero deverá ser pulado




function Adicao(num) {
    for (let i = 0; i <= 10; i++) {
         let resultado = num + i

        console.log(`${num} + ${i} = ${resultado}`)
    }
}

Adicao(1)