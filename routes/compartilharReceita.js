const express = require('express');
const router = express.Router();
const compartilharReceitaController = require("../controllers/compartilharReceitaController")
const receitaController = require("../controllers/receitaController")

/* GET Share Recipe */
router.get('/compartilharReceita', compartilharReceitaController.index);

module.exports = router;
