const listaController = {
  topIngredientes: (req, res) => {
      return res.render('listas')
  },
  melhoresreceitas: (req,res) => {
      return res.render('listasMR')
  },
  categoriasreceitas: (req,res) => {
      return res.render('listasCR')
  }
};

module.exports = listaController;   