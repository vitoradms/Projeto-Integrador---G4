const fs = require('fs');


let db = require('../database/db.json');

const writeToDB = async () => {
    const json = JSON.stringify(db);
    await fs.promises.writeFile('database/db.json', json);
};

const Receita= {
    findById(id) {
        return db.receitas.find(receita => receita.id === id);
    }, 
    
    async salvar(id, nomeReceita, fotoReceita, ingredientes, modoDePreparo, tempoPreparo, porcoes) {
        
        const receita = { id, nomeReceita, fotoReceita, ingredientes, modoDePreparo, tempoPreparo, porcoes};
        db.receitas.push(receita);
        await writeToDB();
    },

    async atualizar(id, receita, fotoReceita) {
        const receitaIndex = db.receitas.findIndex(receita => receita.id === id);
        db.receitas[receitaIndex] = fotoReceita ? { id, ...receita, fotoReceita } : {id, ...receita};
        await writeToDB();
    }, 

    async deletar(id) {
        const receitaIndex = db.receitas.findIndex(receita => receita.id === id);
        db.receitas.splice(receitaIndex, 1);
        await writeToDB();
    }
}

module.exports = Receita
