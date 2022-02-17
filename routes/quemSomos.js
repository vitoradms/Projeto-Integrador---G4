var express = require('express');
var router = express.Router();
var quemSomosController = require('../controllers/quemSomosController');

router.get('/', quemSomosController.quemSomos);

module.exports = router;