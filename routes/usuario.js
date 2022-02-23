var usuarioControllers = require("../controllers/usuarioControllers")
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cadastro', usuarioControllers.cadastro)
router.post('/cadastro', usuarioControllers.salvar)
router.delete('/deletar', usuarioControllers.deletar)
router.put('/atualizarDados', usuarioControllers.atualizarDados)


module.exports = router;