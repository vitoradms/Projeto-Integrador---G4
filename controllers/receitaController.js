const receitaController = {
    index: (req, res) => {
        return res.render('receita')
    },
    cadastrar: (req, res) => {
        return res.send('cadastrando receita')
    },
    favoritar: (req, res) => {
        return res.send('favoritando receita')
    }
};

module.exports = receitaController

