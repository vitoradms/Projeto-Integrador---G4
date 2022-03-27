const { Receita, Ingrediente } = require('../database/models')
const { check, validationResult, body } = require('express-validator');


const receitasController = {
    formSalvar: (req, res) => {
        res.render('salvarReceita', { receita: null, errors: null });
    },

    receita: async (req, res) => {
        const { id } = req.params;
        const receita = await Receita.findOne({ 
            where: { id }, 
            include: ['ingredientes']
        });
        res.render('receita', { receita });
    },

    salvar: async (req, res) => {
        const listaDeErros = validationResult(req);

        if(listaDeErros.isEmpty()){
            const { nome_receita, ingrediente, modo_preparo, tempo_preparo, rendimento } = req.body;
            const foto_receita = req.file ? req.file.filename : res.send("Por favor, adicione uma foto a sua receita!")
            const ingredientes = []
            ingrediente.forEach((ingrediente) => {
                if(ingrediente !== "") {
                    ingredientes.push({nome: ingrediente})
                }
            })
            
            const novaReceita = await Receita.create({
                nome:nome_receita,
                ingredientes,                 
                foto_receita,
                modo_preparo,
                tempo_preparo,
                rendimento,
                usuarios_id: 1
            }, {
                include: ['ingredientes']
            })
            res.redirect(`/receita/${novaReceita.id}`)

        } else {
            res.render('salvarReceita', { receita:null, errors:listaDeErros.errors, old:req.body })
        }
    },

    editar: async (req, res) => {
        const { id } = req.params;

        const receita = await Receita.findOne({ 
            where: { id }, 
            include: ['ingredientes']
        });

        res.render('salvarReceita', { receita });
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const receita = await Receita.findOne({ where: { id }});
        const { nome_receita, ingrediente, modo_preparo, tempo_preparo, rendimento } = req.body;
        const foto_receita = req.file ? req.file.filename : undefined;
        const ingredientes = [];
        ingrediente.forEach((ingrediente) => {
            if(ingrediente !== "") {
                ingredientes.push({nome: ingrediente})
            }
        });
        
        

        const usuario = req.session.usuario;
       if(receita.usuarios_id !== usuario.id){

           res.send('Você não tem permisão para editar essa receita!')
           
       } else if(foto_receita !== undefined) {

           await Receita.update({
            nome:nome_receita,
            ingredientes,
            modo_preparo,
            tempo_preparo,
            rendimento,
            foto_receita
           }, {
               where: { id },
               include: [ 'ingredientes' ]
           })

       } else {

        await Receita.update({
            nome:nome_receita,
            ingredientes,
            modo_preparo,
            tempo_preparo,
            rendimento,
           }, {
               where: { id },
               include: [ 'ingredientes' ]
           })
       }

        res.redirect(`/receita/${id}`)
    },

    deletar: async (req, res) => {
        const { id } = req.params;
        const receita = await Receita.findOne({ where: { id }});
        const usuario = req.session.usuario;

        if(usuario.id === 'undefined' | receita.usuarios_id !== usuario.id ){
           res.send('Você não tem permisão para editar essa receita!')
        } else {
            await Receita.destroy({ 
                where: { id },
                raw: true,
                include: [ 'ingredientes' ]
            }).catch(console.log);

            res.redirect('/home');
        };
    },

    favoritar: (req, res) => {
        return res.send('favoritando receita')
    },
};

module.exports = receitasController

