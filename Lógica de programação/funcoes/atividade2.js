function pularNumeroNaMulti(num1) {
    for(let contador = 0; contador <= 10; contador++) {
        resultado = num1 * contador

        if(contador %2 == 0) {
           console.log("Jump " + resultado)
            continue
        }

        console.log(num1 + " X " + contador+ " = "+ resultado)
    }
}

pularNumeroNaMulti(2)


function pularNum() {
    for(let i = 0; i<=10; i++) {
        if(i == 2) {
            continue
        }
        console.log(i)
    }
}

pularNum()

//atividade concluída


function queroLargar() {
    for(let i = 0; i <= 28; i ++){
        console.log("Quero largar")
    }
}

queroLargar()