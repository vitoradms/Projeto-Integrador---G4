var loginControllers = require("../controllers/loginControllers");
var express = require('express');
var router = express.Router();

router.get('/', loginControllers.login)

module.exports = router