const { Lista_receitas } = require('./database/models');

const listas = Lista_receitas.findAll({include: 'receitas'});//.catch(console.log)

console.log(JSON.stringify(listas));