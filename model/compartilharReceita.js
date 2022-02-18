const fs = require('fs');
const { v4 } = require('uuid');

let db = require('../database/db.json');

const { uploadPath } = require('../config/upload');

const writeToDB = async () => {
    const json = JSON.stringify(db);
    await fs.promises.writeFile('database/db.json', json);
};

const compartilharReceita = {
    async criar(nome, fotos, ingredientes, modoDePreparo) {
        const receita = { id: v4(), nome, fotos, ingredientes, modoDePreparo}
        db.receitas.push(receita);
        await writeToDB();
        return receita
    }
}

module.exports = compartilharReceita
