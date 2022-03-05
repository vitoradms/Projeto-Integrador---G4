const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const loginControllers = {
  exibeFormularioLogin: (req, res) => {
    return res.render('login')
  },
  fazerLogin: (req, res) => {
    const arquivo = fs.readFileSync(path.join(__dirname, '..','database', 'db.json'),{
      encoding: 'utf-8'
    });
    console.log(arquivo)

    const objeto = JSON.parse(arquivo)

    const meuUsuario = objeto.usuarios.find(usuario => usuario.email == req.body.email)

    if (!meuUsuario) {
      return res.render('login');
    }

    const senhaEstaCorreta = bcrypt.compareSync(req.body.senha, meuUsuario.senha)

    if (!senhaEstaCorreta){
      return res.send('usuário ou senha inválidos');
  }

  delete meuUsuario.senha
  req.session.usuario = meuUsuario;

  res.redirect('/arealogada')

  },
  resetsenha: (req, res) => {
    return res.send('senha atualizada')
  }
}

module.exports = loginControllers