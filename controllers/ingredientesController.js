const ingredientesController = {
    cadastrarIngrediente: (req, res) => {
        return res.send('Ingrediente cadastrado com sucesso!')
    },
    buscarIngrediente: (req, res) => {
        return res.send('Ingrediente encontrado em nossa lista!')
    }
};

module.exports = ingredientesController;   