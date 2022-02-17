var loginControllers = require("../controllers/loginControllers");
var express = require('express');
var router = express.Router();

router.get('/', loginControllers.login)
router.get('/logout', loginControllers.logout)
router.put('/resetsenha', loginControllers.resetsenha)


module.exports = router