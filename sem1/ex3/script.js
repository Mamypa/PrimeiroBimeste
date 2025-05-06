// Calcula o fatorial do número
let numero = parseInt(prompt("Digite um número inteiro positivo:"));
if (isNaN(numero) || numero < 0) {
    alert("Por favor, digite um número inteiro positivo válido.");
} else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    alert("O fatorial de " + numero + " é " + fatorial);
}
