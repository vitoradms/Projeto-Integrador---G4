const fs = require('fs');
const db = require('../database/db.json');

const { uploadPath } = require('../config/multer')

const writeToDB = async () => {
    const json = JSON.stringify(db);
    await fs.promises.writeFile('database/db.json', json);
};

const Receita= {
    findById(id) {
        return db.receitas.find(receita => receita.id === id);
    }, 

    async removeFotoReceita(id) {
        const receitaIndex = db.receitas.findIndex(receita => receita.id == id);
        
        await fs.promises.unlink(
          uploadPath + '/' + db.receitas[receitaIndex].fotoReceita
        );
    },
    
    async salvar(id, nomeReceita,ingredientes, modoDePreparo, tempoPreparo, porcoes, fotoReceita) {
        
        const receita = { id, nomeReceita,ingredientes, modoDePreparo, tempoPreparo, porcoes, fotoReceita};
        db.receitas.push(receita);
        await writeToDB();
    },

    async atualizar(id, nomeReceita,ingredientes, modoDePreparo, tempoPreparo, porcoes, fotoReceita) {
        const receitaIndex = db.receitas.findIndex(receita => receita.id === id);
        db.receitas[receitaIndex] = fotoReceita ? { id, nomeReceita, ingredientes, modoDePreparo, tempoPreparo, porcoes, fotoReceita } : { id, nomeReceita,ingredientes, modoDePreparo, tempoPreparo, porcoes, fotoReceita };
        await writeToDB();
    }, 

    async deletar(id) {
        const receitaIndex = db.receitas.findIndex(receita => receita.id === id);
        db.receitas.splice(receitaIndex, 1);
        await writeToDB();
    }
}

module.exports = Receita
