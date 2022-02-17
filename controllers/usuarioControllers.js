const loginControllers = {
  cadastro: (req, res) => {
      return res.render('cadastro')
  },
  deletar: (req, res) => {
    return res.send('deletando usuario')
  },
  atualizarDados: (req, res) => {
    return res.send('atualizando dados usuarios')
  }
};

module.exports = loginControllers