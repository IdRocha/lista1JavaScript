/*Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N */
const prompt = require('prompt-sync')();

let contador = 1
while(contador<=5){
    let n = parseInt(prompt('Informe um valor: '));
    for(let i=1;i<=n;i++){
        console.log(i,' X ',n,' = ', i*n);  
    }
    contador ++;
}