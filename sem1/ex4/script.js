// Verifica o tipo do dado informado
let dado = prompt("Digite qualquer valor:");
let desejaVerificar = confirm("Deseja verificar o tipo do dado informado?");
if (desejaVerificar) {
    let tipo = typeof eval(dado);
    document.body.innerHTML += "<p>O tipo do dado é: " + tipo + "</p>";
} else {
    document.body.innerHTML += "<p>Obrigado por visitar esta página!</p>";
}
