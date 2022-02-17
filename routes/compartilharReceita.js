const express = require('express');
const router = express.Router();
const compartilharReceitaController = require("../controllers/compartilharReceitaController")

router.get('/', compartilharReceitaController.index);

module.exports = router;
