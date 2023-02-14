class tarefa {
  constructor(título, descricao, status, data) {
    this.título = título;
    this.descricao = descricao;
    this.status = status;
    this.data = data;
  }
}

class usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

let tarefa1 = new tarefa("Estudar", "Estudar Programação", "Pendente", "14-02-2023");
let tarefa2 = new tarefa("Fofocar", "Falar da vida do própria","Concluída", "14-02-2023");

let usuario1 = new usuario("Milena Vieira", "milena.vieira@gmail.com", "mi2023");
let usuario2 = new usuario("Mario Mello", "mario.mello@gmail.com", "ma2023");

let db_usuario = [];

db_usuario.push(usuario1, usuario2);

console.log(db_usuario);
