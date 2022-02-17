var areaLogadaControllers = require("../controllers/areaLogadaControllers")
var express = require('express');
var router = express.Router();

router.get('/', areaLogadaControllers.areaLogada)

module.exports = router;
