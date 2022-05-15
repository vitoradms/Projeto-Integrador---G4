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

    const userExist = await Usuario.findOne({ where: { email }})

    if(userExist) {
      return res.send('Usuário já existe')
    }

    Usuario.create({
      nome,
      data_nascimento,
      avatar,
      email,
      senha:hash
    })
    
    res.redirect('/usuario/login')

  },

  async deletar(req, res){
    const { id } = req.params;
    const user = await Usuario.findOne({ where: { id } });
    const usuario = req.session.usuario;

    if (user.id !== usuario.id)
      res.send("Você não tem permisão para deletar esse usuário!");

    await Usuario.destroy({ where: { id } }).catch(console.log);

    res.redirect("/home");
  },

  async exibeFormularioEdicao (req, res){
    const { id } = req.params
    const user = req.session.usuario

    const usuario = await Usuario.findOne({ where: { id }})

    if(usuario.id !== user.id) {
      res.send("Você não tem permissão para editar este usuário!")
    }


    return res.render('formularioEditarUsuario', { usuario })
  },

  async salvaUsuarioEditado (req, res){
    const { id } = req.params
    const { nome, data_nascimento, email, senha } = req.body
    const imagem = req.file.filename

    const saltRounds = 10
    const hash = bcrypt.hashSync(senha, saltRounds)

    const usuario = await Usuario.findOne({where: {id}})

    usuario.nome = nome
    usuario.data_nascimento = data_nascimento
    usuario.email = email
    usuario.senha = hash
    usuario.imagem = imagem

    await usuario.save()

    req.session.usuario = usuario

    console.log(usuario)
    res.redirect('/usuario/arealogada')

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

    const meuUsuario = req.session.usuario


    res.render('areaLogada', { meuUsuario })
  }

}

module.exports = usuarioControllers


