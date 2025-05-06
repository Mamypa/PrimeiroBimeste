// Verifica se o número é par ou ímpar
let numero = parseInt(prompt("Digite um número inteiro positivo:"));
if (isNaN(numero) || numero < 0) {
    alert("Por favor, digite um número inteiro positivo válido.");
} else {
    if (numero % 2 === 0) {
        alert("O número " + numero + " é PAR.");
    } else {
        alert("O número " + numero + " é ÍMPAR.");
    }
}
