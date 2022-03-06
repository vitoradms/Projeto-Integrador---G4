const express = require('express');

const receitasController = require("../controllers/receitasController")

const uploadFotos = require('../middlewares/uploadFotos')

const router = express.Router();


router.get('/salvar', receitasController.formSalvar);
router.get('/:id', receitasController.receita)


router.post('/salvar', uploadFotos, receitasController.salvar);

router.get('/editar/:id', receitasController.editar)
router.put('/salvar/:id', uploadFotos, receitasController.atualizar);
router.delete('/salvar/:id:', receitasController.deletar);

router.get('/favoritar', receitasController.favoritar);




module.exports = router;