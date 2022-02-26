const fs = require('fs');
const { v4 } = require('uuid');

let db = require('../database/db.json');

const { uploadPath } = require('../config/multer');

const writeToDB = async () => {
    const json = JSON.stringify(db);
    await fs.promises.writeFile('database/db.json', json);
};

const Usuario =  {
    async salvar (nomeUsuario, email, senha, confirmacaoSenha) {
        const cadastro = { id: v4(), nomeUsuario, email,  senha, confirmacaoSenha }
        db.usuarios.push(cadastro);
        await writeToDB();
        return cadastro
    }
}

module.exports = Usuario

