export class User {
    id: number;
    nome: string;
    login: string;
    senha: string
    createdDate: number;
    upadatedDate: number;
    email: string;
    admin: string;


    constructor(id: number, nome: string, login: string, senha: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.email = email;
    }
}