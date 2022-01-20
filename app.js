const express = require('express')
let app = express();

app.set("view engine", "ejs");

app.use('/public', express.static('public'));

const rotasCadastro = require('./router/rotasCadastro')
const rotasLogin = require('./router/rotasLogin')


app.use('/cadastro', rotasCadastro)
app.use('/login', rotasLogin)


app.listen(3000, () => console.log("Servidor on"))