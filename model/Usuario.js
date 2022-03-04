const fs = require('fs');
const { v4 } = require('uuid');
const bcrypt = require('bcrypt');

let db = require('../database/db.json');

const writeToDB = async () => {
    const json = JSON.stringify(db);
    await fs.promises.writeFile('database/db.json', json);
};

const Usuario =  {
    async salvar(nome, sobrenome, data_nascimento, email, senha) {
        const saltRounds = 10
        const hash = bcrypt.hashSync(senha, saltRounds)

        const novoUsuario = { id: v4(), nome, sobrenome, data_nascimento, email, senha:hash, admin:false };
        db.usuarios.push(novoUsuario);
        await writeToDB();
        return novoUsuario
    }
}

module.exports = Usuario

