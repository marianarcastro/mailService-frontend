export class User {
    public id: string;
    public nome: string;
    public email: string;
    public senha: string;
    public perfil: string;
    
    constructor(id: string, nome: string, email: string, senha: string) {

        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;

    }

   

}