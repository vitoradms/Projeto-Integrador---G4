const salvarReceita = require('../model/compartilharReceita');

const compartilharReceita = {

    index: (req, res) => {
        return res.render('shareRecipe');
    },

    criar: async (req, res) => {
        let { nome_da_receita, foto_receita, ingrediente1, modo_de_preparo } = req.body
        const receita = await salvarReceita.criar(nome_da_receita, foto_receita, ingrediente1, modo_de_preparo)
    },

};

module.exports = compartilharReceita