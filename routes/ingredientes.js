var ingredientesController = require("../controllers/ingredientesController")
var express = require('express');
var router = express.Router();

router.post('/', ingredientesController.cadastrarIngrediente);
router.get('/', ingredientesController.buscarIngrediente);

module.exports = router;
