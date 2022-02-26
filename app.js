const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');


const receitaRouter = require('./routes/receitas');
const areaLogadaRouter = require('./routes/areaLogada')
const quemSomosRouter = require('./routes/quemSomos');
const homeRouter = require('./routes/home');
const usuarioRouter = require('./routes/usuario');
const loginRouter = require('./routes/login')
const ingredientesRouter = require('./routes/ingredientes')
const listaRouter = require('./routes/lista');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


app.use('/receita', receitaRouter);
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
