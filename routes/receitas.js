const express = require('express');

const receitasController = require("../controllers/receitasController")

const uploadFotos = require('../middlewares/uploadFotos')

const router = express.Router();


router.get('/', receitasController.showReceita);
router.get('/salvar', receitasController.showSalvarForm);
router.post('/salvar', uploadFotos, receitasController.salvarReceita);
router.get('/favoritar', receitasController.favoritar);


module.exports = router;