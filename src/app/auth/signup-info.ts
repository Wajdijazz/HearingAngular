export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    roles: string[];
    password: string;
    id_societe :any

    constructor(name:string, username: string, email: string, password: string,id_societe : any) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = ['user'];
        this.id_societe=id_societe

    }
}
