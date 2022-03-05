const { v4 } = require('uuid');
const Receita = require('../model/Receita');

const receitasController = {
    formulario: (req, res) => {
        res.render('salvarReceita', { receita: null });
    },

    receita: (req, res) => {
        const { id } = req.params;
        const receita = Receita.findById(id);
        res.render('receita', { receita });
    },

    salvar: async (req, res) => {
        const { nome_da_receita, modo_de_preparo, ingrediente, tempo_preparo, porcoes } = req.body;
        const fotoReceita = req.file.filename;
        const id = v4()

        let ingredientes = ingrediente.filter((ingrediente) => ingrediente !== "");
        await Receita.salvar( id, nome_da_receita, fotoReceita, ingredientes, modo_de_preparo, tempo_preparo, porcoes);
        
        res.redirect(`/receita/${id}`)
    },

    editar: (req, res) => {
        const { id } = req.params;
        const receita = Receita.findById(id);
        res.render('salvarReceita', { receita });
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const receita = req.body;
        const fotoReceita = req.file ? req.file.filename : undefined
       await Receita.atualizar(id, receita);

       if(fotoReceita){
           await Receita.removeFoto(id);
           Receita.atualizar(id, receita, fotoReceita);
       } else {
           Receita.update(id, receita)
       }
        res.redirect(`/receita${id}`)
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

