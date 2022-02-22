const fs = require('fs');
const { v4 } = require('uuid');

let db = require('../database/db.json');

const { uploadPath } = require('../config/multer');

const writeToDB = async () => {
    const json = JSON.stringify(db);
    await fs.promises.writeFile('database/db.json', json);
};

const salvarReceita = {
    async salvar(nomeReceita, fotoReceita, ingredientes, modoDePreparo) {
        const receita = { id: v4(), nomeReceita, fotoReceita, ingredientes, modoDePreparo}
        db.receitas.push(receita);
        await writeToDB();
        return receita
    }
}

module.exports = salvarReceita
