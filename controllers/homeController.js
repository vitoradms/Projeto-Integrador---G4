const homeController = {
    home: (req, res) => {
        return res.render('home', { receitas: null })
    }
};

module.exports = homeController;   