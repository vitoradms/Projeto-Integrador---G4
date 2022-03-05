function usuarioEstaLogado(req, res, next){
  if(typeof req.session.usuario == 'undefined'){
    return res.redirect('/login');
  }
  next();
}

module.exports = usuarioEstaLogado