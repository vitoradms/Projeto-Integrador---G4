const salvarReceita = require('../model/salvarReceita');

const receitasController = {
    showReceita: (req, res) => {
        return res.render('receita')
    },
    showSalvarForm: (req, res) => {
        return res.render('salvarReceita');
    },
    salvarReceita: async (req, res) => {
        let { nome_da_receita, foto_receita, ingrediente1, modo_de_preparo } = req.body
        const receita = await salvarReceita.salvar(nome_da_receita, foto_receita, ingrediente1, modo_de_preparo);
        res.send('Receita salva')
    },
    favoritar: (req, res) => {
        return res.send('favoritando receita')
    }
};

module.exports = receitasController

