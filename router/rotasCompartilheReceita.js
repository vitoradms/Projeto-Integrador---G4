const express = require('express')

const CompartilheReceitaController = require('../controllers/CompartilheReceitaController')

const router = express.Router();

router.get('/', CompartilheReceitaController.compartilheReceita);

module.exports = router;