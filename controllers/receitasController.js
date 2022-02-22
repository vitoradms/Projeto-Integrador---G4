const receitas = require('../model/Receitas');

const receitasController = {
    showReceita: (req, res) => {
        return res.render('receita')
    },
    showSalvarForm: (req, res) => {
        return res.render('salvarReceita');
    },
    salvarReceita: async (req, res) => {
        console.log(req.body)
        const { nome_da_receita, modo_de_preparo } = req.body
        const fotoReceita = req.file.filename
        const { ingredientes } = req.body
       
       const novaReceita = await receitas.salvar(nome_da_receita, fotoReceita, ingredientes, modo_de_preparo);
        res.send('receita salva')

    },
    favoritar: (req, res) => {
        return res.send('favoritando receita')
    }
};

module.exports = receitasController

