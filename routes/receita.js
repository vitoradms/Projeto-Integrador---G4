const express = require('express');

const receitasController = require("../controllers/receitasController")

const uploadFotos = require('../middlewares/uploadFotos')

const router = express.Router();


router.get('/salvar', receitasController.formSalvar);
router.get('/:id', receitasController.receita)
router.delete('/:id', receitasController.deletar);

router.post('/salvar', uploadFotos, receitasController.salvar);
router.get('/editar/:id', receitasController.editar)
router.put('/salvar/:id', uploadFotos, receitasController.atualizar);

router.get('/favoritar', receitasController.favoritar);




module.exports = router;