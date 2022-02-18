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
        db.compartilharReceita.push({ id: v4(), ...compartilharReceita, fotos, ingredientes, modoDePreparo});
        await writeToDB();
    }
}

module.exports = compartilharReceita
