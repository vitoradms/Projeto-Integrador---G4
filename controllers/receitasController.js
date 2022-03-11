const { v4 } = require('uuid');
const Receita = require('../model/Receita');
const { check, validationResult, body } = require('express-validator')

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
        const listaDeErros = validationResult(req);

        if(listaDeErros.isEmpty()){
            const { nome_da_receita, ingrediente, modo_de_preparo, tempo_preparo, porcoes } = req.body;
            const id = v4()
            const fotoReceita = req.file.filename
            const ingredientes = ingrediente.filter((ingrediente) => ingrediente !== "");
    
            await Receita.salvar( id, nome_da_receita, ingredientes, modo_de_preparo, tempo_preparo, porcoes, fotoReceita,);
            res.redirect(`/receita/${id}`)

        } else {
            res.render('salvarReceita', { receita:null, errors:listaDeErros.errors, old:req.body })
        }
    },

    editar: (req, res) => {
        const { id } = req.params;
        const receita = Receita.findById(id);
        res.render('salvarReceita', { receita });
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const { nome_da_receita, ingrediente, modo_de_preparo, tempo_preparo, porcoes, foto } = req.body
        const fotoReceita = req.file ? req.file.filename : undefined
        const ingredientes = ingrediente.filter((ingrediente) => ingrediente !== "");

       if (fotoReceita) {
           await Receita.removeFotoReceita(id);
           Receita.atualizar(id, nome_da_receita, ingredientes, modo_de_preparo, tempo_preparo, porcoes, fotoReceita);
       } else {
           Receita.atualizar(id, nome_da_receita, ingredientes, modo_de_preparo, tempo_preparo, porcoes, foto)
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

