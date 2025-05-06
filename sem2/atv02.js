function getDataUser()
{
    const meses=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    const dias=['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];
    const dataAtual=new Date();
    const diaDaSemana = dias[dataAtual.getDay()];
    const dia = dataAtual.getDate();
    const mesDoAno = meses[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();
    document.getElementById('data').innerHTML=`<h1>${diaDaSemana}, ${dia} de ${mesDoAno} de ${ano}</h1>`;
}
getDataUser();
function Relogio()
{
    const data = new Date();

    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    const horaFormatada = `${horas}:${minutos}:${segundos}`;

    document.getElementById('relogio').innerHTML = horaFormatada;
    setTimeout(Relogio, 1000);
}
function lerFrase() {
    
    let frase = document.getElementById("fraseInput").value;

    if(ehPalindromo(frase)) {
        document.getElementById("resultado").textContent = "A frase: "+frase+" é um palíndromo!";
    } else {
        document.getElementById("resultado").textContent = "A frase: "+frase+" não é um palíndromo!";
    }
    
}
function ehPalindromo(frase) {
    let fraseSemEspacos = frase.replace(/\s/g, "").toLowerCase();
    let fraseInvertida = fraseSemEspacos.split("").reverse().join("");
    return fraseSemEspacos === fraseInvertida;
}
document.getElementById("fraseInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        lerFrase(); 
    }
}
);
Relogio();