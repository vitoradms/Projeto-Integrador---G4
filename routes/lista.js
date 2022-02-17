var express = require('express');
var router = express.Router();
var listaController = require('../controllers/listaController');

router.get('/', listaController.topIngredientes);

module.exports = router;