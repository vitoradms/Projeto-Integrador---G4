const express = require('express');

const usuarioControllers = require("../controllers/usuarioControllers")

const router = express.Router();

/* GET users listing. */
router.get('/cadastro', usuarioControllers.showCadastro)
router.post('/cadastro', usuarioControllers.salvarUsuario)
router.delete('/deletar', usuarioControllers.deletar)
router.put('/atualizarDados', usuarioControllers.atualizarDados)


module.exports = router;