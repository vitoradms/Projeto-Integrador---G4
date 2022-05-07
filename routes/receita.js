const express = require('express');

const receitasController = require("../controllers/receitasController")

const uploadFotos = require('../middlewares/uploadFotos')
const receitaValidator = require('../validators/receitaValidator')
const usuarioEstaLogado = require('../middlewares/usuarioEstaLogado')

const router = express.Router();


router.get('/salvar', usuarioEstaLogado, receitasController.formSalvar);
router.get('/:id', receitasController.receita)
router.delete('/:id', receitasController.deletar);

router.post('/salvar', uploadFotos, receitaValidator, receitasController.salvar);
router.get('/editar/:id', receitasController.editar)
router.put('/salvar/:id', uploadFotos, receitaValidator, receitasController.atualizar);

router.get('/favoritar', receitasController.favoritar);

router.post('/buscarReceita', receitasController.buscarReceita)




module.exports = router;