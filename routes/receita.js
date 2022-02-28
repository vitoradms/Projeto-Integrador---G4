const express = require('express');

const receitasController = require("../controllers/receitasController")

const uploadFotos = require('../middlewares/uploadFotos')

const router = express.Router();

router.get('/salvar', receitasController.formulario);
router.post('/salvar', uploadFotos, receitasController.salvar);
router.get('/:id', receitasController.receita)
router.get('/favoritar', receitasController.favoritar);
router.put('/editar/:id', receitasController.atualizar);
router.delete('/deletar/:id:', receitasController.deletar);


module.exports = router;