const salvarReceita = require('../model/salvarReceita');

const receitasController = {
    showReceita: (req, res) => {
        return res.render('receita')
    },
    showSalvarForm: (req, res) => {
        return res.render('salvarReceita');
    },
    salvarReceita: async (req, res) => {
        const { filename } = req.file
        let { nome_da_receita, foto_receita, ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5, modo_de_preparo } = req.body
        const receita = await salvarReceita.salvar(nome_da_receita, filename, ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5, modo_de_preparo);
        res.send('receita salva')

    },
    favoritar: (req, res) => {
        return res.send('favoritando receita')
    }
};

module.exports = receitasController

