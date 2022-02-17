const express = require('express');
const router = express.Router();

const receitaController = require("../controllers/receitaController")


router.get('/receita', receitaController.index);
router.post('/cadastrar', receitaController.cadastrar);
router.get('/favoritar', receitaController.favoritar);

module.exports = router;