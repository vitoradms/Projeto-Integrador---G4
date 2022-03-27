const { Usuario } = require('../database/models')

const bcrypt = require('bcrypt');

const usuarioControllers = {
  showCadastro(req, res) {
    return res.render('cadastro')
  },

  async salvarUsuario(req, res){
    const { nome, sobrenome, data_nascimento, email, senha }= req.body;
    const avatar = req.file.filename

    const saltRounds = 10
    const hash = bcrypt.hashSync(senha, saltRounds)


    Usuario.create({
      nome,
      data_nascimento,
      avatar,
      email,
      senha:hash
    })
    
    res.redirect('/usuario/login')

  },

  deletar(req, res){
    return res.send('deletando usuario')
  },

  atualizarDados(req, res){
    return res.send('atualizando dados usuarios')
  },

  exibeFormularioLogin: (req, res) => {
    return res.render('login')
  },

  async fazerLogin(req, res) {
    const { email, senha } = req.body

    const meuUsuario = await Usuario.findOne({ where: { email }})

    if (!meuUsuario) {
      return res.render('login');
    }

    const senhaEstaCorreta = bcrypt.compareSync(senha, meuUsuario.senha)

    if (!senhaEstaCorreta){
      return res.send('usuário ou senha inválidos');
  }

  delete meuUsuario.senha
  req.session.usuario = meuUsuario;

  res.redirect('/usuario/arealogada')

  },

  usuarioLogado(req, res){
    res.render('areaLogada')
  }

}

module.exports = usuarioControllers