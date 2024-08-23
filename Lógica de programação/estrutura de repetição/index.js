//exemplo for
for (let contador = 0; contador <= 10; contador++) {
    console.log("Nº " + contador);
}

console.log("\n\nParte 2\n\n")

//desafio 
for (let cont = 10; cont <= 20; cont++) {
    console.log("Nº " + cont);
}

//exemplo professora while
let text = "";
let i = 0;

while (i < 10) {
    text = "O numero é: " + i;
    console.log(text);
    i++;
}


console.log("\n\n\n")
//contador para while
let mensagem = "";
let contador2 = 10;

while (contador2 <= 20) {
    mensagem = "O Nº é: " + contador2;
    console.log(mensagem);
    contador2++;
}

//do while
let texto = "";
let contador3 = 0; //inicializador
//inicia com o do

do {
    texto = "\nThe number is: " + contador3; //ação a ser repetida
    console.log(texto);
    contador3++;
} while (contador3 < 5);


//exercicio
//for

for (let i = 0; i < 0; i++) {
    console.log("number: " + i);
}


//while
let contador4 = 0;
let textinho = "";

while (contador4 < 0) {
    textinho = "O número é: " + i;
    i++;
}

//do-while

let contador5 = 0;
let textinho1 = "";
do {
    textinho1 = console.log("\n\n\nO único que rodou algo foi o do-while numero é: " + contador5);
}
while (contador5 < 0)


//for of
console.log("for-of")

let listaPalavras = ["Figma", "Palavra", "Java", "galinha"];
let letras = "";

for (let i of listaPalavras) {
    console.log(i);
}


// let valor = parseFloat(prompt("qual número da tabuada que você quer fazer?"))
// //tabuada
// for(let contagem = 0; contagem <= 10; contagem  ++) {
//     let resultado = valor * contagem;
//     console.log(valor +" x "+contagem+ " = " + resultado)

// }

//ESSE É PARA SOMA

// for (let valore = 1; valore <= 10; valore++) {
//     let resultado = valore + 3;
//     let adicao = valore + " + 3 =  " + resultado;
//     console.log(adicao);
// }

for (let valore = 1; valore <= 10; valore++) {
    for (let contador7 = 0; contador7 <= 10; contador7++) {
        let multiplicacao = valore * contador7;
        let resultado = `${valore} x ${contador7} = ${multiplicacao}`;
        console.log(resultado);
    }

    console.log('');
}

//break para quebrar o código

let textinho2 = "";

for (let contador8 = 10; contador8 <=20; contador8 ++) {
    textinho2 = "Contagem Nº " + contador8;
    
    if(contador8 == 15) {
        break;
    }
    console.log(textinho2 + "\n\n\n")
}

let text1 = "";
let contador9 = 0;

for(contador9; contador9 <=10; contador9 ++) {
    text1 = `Nº  ${contador9}`

    if(contador9 == 3) {
        console.log("pula o 3");
        continue;
    }
    console.log(text1);
}

//mostrar numeros impares de 0 a 15



for (let i2 = 0; i2 <=15; i2++) {
    if(i2 % 2 == 0) {
        console.log("Nº par " + i2);
        continue;
    }
    console.log(i2 + " N° ímpar");
}