const { v4 } = require('uuid');
const Receita = require('../model/Receita');

const receitasController = {
    formSalvar: (req, res) => {
        res.render('salvarReceita', { receita: null });
    },

    receita: (req, res) => {
        const { id } = req.params;
        const receita = Receita.findById(id);
        res.render('receita', { receita });
    },

    salvar: async (req, res) => {
        const { nome_da_receita, ingrediente, modo_de_preparo, tempo_preparo, porcoes } = req.body;
        const fotoReceita = req.file.filename;
        const id = v4()
        const ingredientes = ingrediente.filter((ingrediente) => ingrediente !== "");

        await Receita.salvar( id, nome_da_receita, ingredientes, modo_de_preparo, tempo_preparo, porcoes, fotoReceita,);
        
        res.redirect(`/receita/${id}`)
    },

    editar: (req, res) => {
        const { id } = req.params;
        const receita = Receita.findById(id);
        res.render('salvarReceita', { receita });
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const { nome_da_receita, ingrediente, modo_de_preparo, tempo_preparo, porcoes } = req.body;
        const fotoReceita = req.file ? req.file.filename : undefined
        const ingredientes = ingrediente.filter((ingrediente) => ingrediente !== "");

       if(fotoReceita){
           await Receita.removeFotoReceita(id);
           Receita.atualizar(id, nome_da_receita, ingredientes, modo_de_preparo, tempo_preparo, porcoes, fotoReceita);
       } else {
           Receita.atualizar(id, nome_da_receita, ingredientes, modo_de_preparo, tempo_preparo, porcoes)
       }
        res.redirect(`/receita/${id}`)
    },

    deletar: async (req, res) => {
        const { id } = req.params;
        await Receita.removeFotoReceita(id);
        await Receita.deletar(id);
        res.redirect('/home');
    },

    favoritar: (req, res) => {
        return res.send('favoritando receita')
    },
};

module.exports = receitasController

