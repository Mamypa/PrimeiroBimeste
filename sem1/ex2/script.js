// Verifica se o número é primo
let numero = parseInt(prompt("Digite um número inteiro positivo:"));
if (isNaN(numero) || numero < 2) {
    alert("Por favor, digite um número inteiro positivo maior que 1.");
} else {
    let primo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        alert("O número " + numero + " é PRIMO.");
    } else {
        alert("O número " + numero + " NÃO é primo.");
    }
}
