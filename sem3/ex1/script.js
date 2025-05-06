var pessoas = [];

function addObj()
{
    const nome = document.getElementById("nome").value;
    const cidade = document.getElementById("cidade").value;
    const pessoa = {
        nome,
        cidade
    }
    pessoas.push(pessoa);
    atualizaLista();
}
function atualizaLista()
{
    const lista = document.getElementById("listaPessoa");
    lista.innerHTML = "";

    pessoas.sort((a, b) => a.nome.localeCompare(b.nome));
    
    pessoas.forEach(pessoa => {
        const item = document.createElement("li");
        item.textContent = `${pessoa.nome} - ${pessoa.cidade}`;
        lista.appendChild(item);
    });
}