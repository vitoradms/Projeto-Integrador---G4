const express = require('express');

const receitasController = require("../controllers/receitasController")

const uploadFotos = require('../middlewares/uploadFotos')

const router = express.Router();

router.get('/', receitasController.index)
router.get('/show/:id', receitasController.showReceita);
router.get('/salvar', receitasController.showForm);
router.post('/salvar', uploadFotos, receitasController.salvar);
router.get('/favoritar', receitasController.favoritar);
router.put('/id:', receitasController.atualizar);
router.delete('/id:', receitasController.deletar);


module.exports = router;