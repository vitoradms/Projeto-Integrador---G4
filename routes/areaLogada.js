
var areaLogadaControllers = require("../controllers/areaLogadaControllers")
var express = require('express');
var router = express.Router();
const usuarioEstaLogado = require('../middlewares/usuarioEstaLogado')

router.get('/', usuarioEstaLogado, areaLogadaControllers.areaLogada)

module.exports = router;
