class usuario {
    constructor(nombre, apellidos, email, password="") {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
    }

    checkPassword(password) {
        if (password == this.password) {
            return true;
        }
        return false;
    }
}

module.exports = usuario;