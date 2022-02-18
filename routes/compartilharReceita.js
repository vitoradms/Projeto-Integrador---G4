const express = require('express');
const router = express.Router();
const multer = require('multer');

const {storage} = require('../config/upload');

const compartilharReceitaController = require("../controllers/compartilharReceitaController")

const upload = multer({ storage });

router.get('/', compartilharReceitaController.index);

router.post('/', compartilharReceitaController.criar);

module.exports = router;
