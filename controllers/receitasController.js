const receitas = require('../model/Receitas');

const receitasController = {
    showReceita: (req, res) => {
        return res.render('receita')
    },
    showSalvarForm: (req, res) => {
        return res.render('salvarReceita');
    },
    salvarReceita: async (req, res) => {
        const { nome_da_receita, modo_de_preparo, ingrediente, tempo_preparo, porcoes } = req.body
        const fotoReceita = req.file.filename
        
        let ingredientes = ingrediente.filter((ingrediente) => ingrediente !== "")

        const novaReceita = await receitas.salvar(nome_da_receita, fotoReceita, ingredientes, modo_de_preparo, tempo_preparo, porcoes);
        res.send('receita salva')


        
    },
    favoritar: (req, res) => {
        return res.send('favoritando receita')
    }
};

module.exports = receitasController

