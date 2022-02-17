var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var receitaRouter = require('./routes/receita');
var compartilharReceitaRouter = require('./routes/compartilharReceita')
var usersRouter = require('./routes/users');
var areaLogadaRouter = require('./routes/areaLogada')
var quemSomosRouter = require('./routes/quemSomos');
var homeRouter = require('./routes/home');
var usuarioRouter = require('./routes/usuario');
var loginRouter = require('./routes/login')
var ingredientesRouter = require('./routes/ingredientes')
var listaRouter = require('./routes/lista');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/receita', receitaRouter);
app.use('/compartilharreceita', compartilharReceitaRouter)
app.use('/users', usersRouter);
app.use('/areaLogada', areaLogadaRouter);
app.use('/quemsomos', quemSomosRouter);
app.use('/home', homeRouter);
app.use('/usuario', usuarioRouter);
app.use('/login', loginRouter);
app.use('/ingredientes', ingredientesRouter);
app.use('/login', loginRouter)
app.use('/lista', listaRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
