var loginControllers = require("../controllers/loginControllers");
var express = require('express');
var router = express.Router();

router.get('/', loginControllers.exibeFormularioLogin)
router.post('/', loginControllers.fazerLogin)




module.exports = router