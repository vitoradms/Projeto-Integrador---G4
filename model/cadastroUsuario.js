const fs = require('fs');
const { v4 } = require('uuid');

let db = require('../database/db.json');

const { uploadPath } = require('../config/multer');

const writeToDB = async () => {
    const json = JSON.stringify(db);
    await fs.promises.writeFile('database/dbUsuario.json', json);
};

const cadastroUsuarios =  {
    async salvar (nomeUsuario, senha, confirmacaoSenha) {
        const cadastro = { id: v4(), nomeUsuario, senha, confirmacaoSenha}
        db.receitas.push(cadastro);
        await writeToDB();
        return cadastro
    }
}

module.exports = cadastroUsuarios

