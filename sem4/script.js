class Professor {
    constructor(nome, email, telefoneFixo, telefoneCelular, dataNascimento, area, lattes) {
        this.nome = nome;
        this.email = email;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
        this.dataNascimento = dataNascimento;
        this.area = area;
        this.lattes = lattes;
    }

    exibirDados() {
        return `
            Nome: ${this.nome}
            Email: ${this.email}
            Telefone Fixo: ${this.telefoneFixo}
            Telefone Celular: ${this.telefoneCelular}
            Data de Nascimento: ${this.dataNascimento}
            Área: ${this.area}
            Lattes: ${this.lattes}
        `;
    }
}

class Aluno extends Professor {
    constructor(nome, email, telefoneFixo, telefoneCelular, dataNascimento, area, lattes, matricula) {
        super(nome, email, telefoneFixo, telefoneCelular, dataNascimento, area, lattes);
        this.matricula = matricula;
    }

    exibirDados() {
        return super.exibirDados() + `\nMatrícula: ${this.matricula}`;
    }
}

const container = document.getElementById('form-container');

const formHTML = `
    <form id="cadastroForm">
        <h2>Formulário de Cadastro:</h2>
        <label>Nome:</label>
        <input type="text" id="nome" placeholder="Digite seu nome completo" required>
        <label>Email:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" required>
        <label>Data Nascimento:</label>
        <input type="date" id="dataNascimento">
        <label>Telefone Fixo:</label>
        <input type="tel" id="telefoneFixo" placeholder="(99)9999-9999">
        <label>Telefone Celular:</label>
        <input type="tel" id="telefoneCelular" placeholder="(99)99999-9999">
        <div class="radio-group">
            <label><input type="radio" name="tipo" value="professor" checked> Professor</label>
            <label><input type="radio" name="tipo" value="aluno"> Aluno</label>
        </div>
        <label>Área:</label>
        <input type="text" id="area" placeholder="Digite sua área de atuação">
        <label>Matrícula:</label>
        <input type="text" id="matricula" placeholder="Digite sua matrícula">
        <label>Lattes:</label>
        <input type="url" id="lattes" placeholder="Digite aqui o endereço para seu Lattes">
        <button type="submit">Enviar</button>
        <button type="reset">Redefinir</button>
    </form>
`;

container.innerHTML = formHTML;

document.getElementById("cadastroForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const telefoneFixo = document.getElementById("telefoneFixo").value;
    const telefoneCelular = document.getElementById("telefoneCelular").value;
    const area = document.getElementById("area").value;
    const lattes = document.getElementById("lattes").value;
    const matricula = document.getElementById("matricula").value;

    let pessoa;
    if (tipo === "aluno") {
        pessoa = new Aluno(nome, email, telefoneFixo, telefoneCelular, dataNascimento, area, lattes, matricula);
    } else {
        pessoa = new Professor(nome, email, telefoneFixo, telefoneCelular, dataNascimento, area, lattes);
    }

    alert(pessoa.exibirDados());
});
