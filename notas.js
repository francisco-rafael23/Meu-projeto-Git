const notas = [7.5, 8.0, 6.0, 9.5, 5.0];

let soma = 0;
let maiorNota = notas[0];
let menorNota = notas[0];

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];

    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
    }

    if (notas[i] < menorNota) {
        menorNota = notas[i];
    }
}

const media = soma / notas.length;

console.log("Notas do aluno:", notas);
console.log("Média das notas:", media.toFixed(2));
console.log("Maior nota:", maiorNota);
console.log("Menor nota:", menorNota);
