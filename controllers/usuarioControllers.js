const Usuario = require('../model/Usuario')

const usuarioControllers = {
  showCadastro(req, res) {
    return res.render('cadastro')
  },

  async salvarUsuario(req, res){
    const { nome, sobrenome, data_nascimento, email, senha }= req.body;
    const fotoPerfil = req.file.filename

    await Usuario.salvar(fotoPerfil, nome, sobrenome, data_nascimento, email, senha);
    res.send("Salvo com sucesso")

  },

  deletar(req, res){
    return res.send('deletando usuario')
  },

  atualizarDados(req, res){
    return res.send('atualizando dados usuarios')
  },
}

module.exports = usuarioControllers