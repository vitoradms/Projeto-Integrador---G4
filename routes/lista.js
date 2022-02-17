var express = require('express');
var router = express.Router();
var listaController = require('../controllers/listaController');

router.get('/', listaController.topIngredientes);
router.get('/melhoresreceitas', listaController.melhoresreceitas);
router.get('/categoriasreceitas', listaController.categoriasreceitas);

module.exports = router;