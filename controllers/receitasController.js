const Receita = require('../model/Receita');

const receitasController = {
    index: (req, res) => {
        res.render('receita', { receita: null });
    },

    showForm: (req, res) => {
        res.render('salvarReceita', { receita: null });
    },

    showReceita: (req, res) => {
        const { id } = req.params;
        const receita = Receita.findById(id);
        res.render('receita', { receita});
    },

    salvar: async (req, res) => {
        const { nome_da_receita, modo_de_preparo, ingrediente, tempo_preparo, porcoes } = req.body;
        const fotoReceita = req.file.filename;
        
        let ingredientes = ingrediente.filter((ingrediente) => ingrediente !== "");
        await Receita.salvar(nome_da_receita, fotoReceita, ingredientes, modo_de_preparo, tempo_preparo, porcoes);
        res.redirect('/receita')
    },

    editar: (req, res) => {
        const { id } = req.params;
        const receita = Receita.findById(id);
        res.render('salvarReceita', { receita });
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        const receita = req.body;
        Receita.atualizar(id, receita);
        res.redirect('/receita')
    },

    deletar: async (req, res) => {
        const { id } = req.params;
        await Receita.deletar(id);
        res.redirect('/receita');
    },

    favoritar: (req, res) => {
        return res.send('favoritando receita')
    },
};

module.exports = receitasController

