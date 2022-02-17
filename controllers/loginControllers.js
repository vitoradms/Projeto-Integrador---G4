const loginControllers = {
  login: (req, res) => {
    return res.render('login')
  },
  logout: (req, res) => {
    return res.send('usuario desconectado')
  },
  resetsenha: (req, res) => {
    return res.send('senha atualizada')
  }
}

module.exports = loginControllers