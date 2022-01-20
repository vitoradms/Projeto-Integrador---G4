const express = require('express')

const CadastroController = require('../controllers/CadastroController')

const router = express.Router();

router.get('/', CadastroController.cadastro);


module.exports = router;