const express = require('express');

const usuarioControllers = require("../controllers/usuarioControllers")

const uploadFotos = require('../middlewares/uploadFotos')
const usuarioEstaLogado = require('../middlewares/usuarioEstaLogado')

const router = express.Router();

/* GET users listing. */
router.get('/cadastro', usuarioControllers.showCadastro)
router.post('/cadastro',uploadFotos, usuarioControllers.salvarUsuario)
router.delete('/deletar', usuarioControllers.deletar)
router.put('/atualizarDados', usuarioControllers.atualizarDados)
router.get('/login', usuarioControllers.exibeFormularioLogin)
router.post('/login', usuarioControllers.fazerLogin)
router.get('/arealogada', usuarioEstaLogado, usuarioControllers.usuarioLogado)

module.exports = router;