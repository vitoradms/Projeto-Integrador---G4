var express = require('express');
var router = express.Router();
var shareRecipeController = require("../controllers/shareRecipeController")
var receitaController = require("../controllers/receitaController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Share Recipe */
router.get('/compartilharReceita', shareRecipeController.index);

/* Get receitas */
router.get('/receita', receitaController.index);

module.exports = router;

