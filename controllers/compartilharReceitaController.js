const compartilharReceita = {

    index: (req, res) => {
        return res.render('shareRecipe');
    },

    criar: (req, res) => {
        console.log(req.body);
    },

};

module.exports = compartilharReceita