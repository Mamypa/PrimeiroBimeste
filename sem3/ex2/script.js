document.getElementById("carroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const carro = {
        marca: document.getElementById("marca").value,
        modelo: document.getElementById("modelo").value,
        ano: parseInt(document.getElementById("ano").value),
        cor: document.getElementById("cor").value,
        km: parseFloat(document.getElementById("km").value),
        valor_fipe: parseFloat(document.getElementById("valorFipe").value),

        anosUtilizacao: function() {
            const anoAtual = new Date().getFullYear();
            return anoAtual - this.ano;
        },

        valorMercado: function() {
            const anos = this.anosUtilizacao();
            const kmAnual = this.km / anos;
            if (kmAnual <= 30000) {
                return this.valor_fipe * 1.10;
            } else if (kmAnual <= 50000) {
                return this.valor_fipe;
            } else {
                return this.valor_fipe * 0.90;
            }
        }
    };

    const resultado = `
        <p>O veículo tem ${carro.anosUtilizacao()} anos de uso.</p>
        <p>O valor de mercado é R$ ${carro.valorMercado().toFixed(2)}.</p>
    `;
    document.getElementById("resultado").innerHTML = resultado;
});
