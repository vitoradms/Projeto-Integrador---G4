const { check, validationResult, body } = require('express-validator')

const receitaValidator = 
[
    check("nome_da_receita").notEmpty().withMessage("O nome da receita não pode estar vazio"), 
    check("ingrediente").notEmpty().withMessage("Não se faz omelete sem quebrar alguns ovos. Adicione ingredientes!"),
    check("modo_de_preparo").isLength({ min: 50 }).withMessage("Como se prepara a sua receita?"),
    check("tempo_preparo").notEmpty().withMessage("Sem tempo irmão! Quanto tempo leva para preparar sua receita?"),
    check("porcoes").notEmpty().withMessage("O quanto rende sua receita?")
]

module.exports = receitaValidator