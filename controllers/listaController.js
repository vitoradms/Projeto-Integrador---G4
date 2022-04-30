const { Lista_receitas } = require('../database/models');

const listaController = {
  topIngredientes: (req, res) => {
      return res.render('listas') 
  },
  melhoresreceitas: (req,res) => {
      return res.render('listasMR')
  },
  categoriasreceitas: async (req,res) => { 
    try {
    const listas = await Lista_receitas.findAll({include: {association: "receitas", include: {association: "ingredientes"}}});//.catch(console.log)

      return res.render('listasCR', {listas})
    }
    catch(err) {
      console.log(err)
    }
  },
};

module.exports = listaController;   