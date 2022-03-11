const { check } = require('express-validator');

const validateRegister = [ check('name').notEmpty().withMessage('Campo deve ser preenchido').bail() ]