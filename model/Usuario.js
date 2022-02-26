const fs = require('fs');
const { v4 } = require('uuid');

let db = require('../database/db.json');

const { uploadPath } = require('../config/multer');

const writeToDB = async () => {
    const json = JSON.stringify(db);
    await fs.promises.writeFile('database/db.json', json);
};

const Usuario =  {
    async salvar (nome, email, senha) {
        const cadastro = { id: v4(), nome, email, senha,}
        db.usuarios.push(cadastro);
        await writeToDB();
        return cadastro
    }
}

module.exports = Usuario

