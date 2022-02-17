var usuarioControllers = require("../controllers/usuarioControllers")
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cadastro', usuarioControllers.cadastro)
router.get('/deletar', usuarioControllers.deletar)
router.get('/atualizarDados', usuarioControllers.atualizarDados)


module.exports = router;