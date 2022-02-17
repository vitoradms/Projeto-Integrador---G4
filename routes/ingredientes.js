var ingredientesController = require("../controllers/ingredientesController")
var express = require('express');
var router = express.Router();

router.post('/cadastraringrediente', ingredientesController.cadastrarIngrediente);
router.get('/buscaringrediente', ingredientesController.buscarIngrediente);

module.exports = router;
