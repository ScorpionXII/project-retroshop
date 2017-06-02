const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const passport     = require('passport');
const session      = require('express-session');
const MongoStore   = require('connect-mongo')(session);
const cors         = require('cors');

mongoose.connect('mongodb://localhost/retroshop-db');

const app = express();

require('dotenv').load();

// passport.js configuration
require('./config/passportConfig')(passport);

// session configuration
app.use(session({
    secret: 'retroshop-key',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection})
}));

// configuring CORS > EXTREMELY IMPORTANT FOR SESSIONS!
const corsOptions = {
    origin: true,
    credentials: true
}

app.use(cors(corsOptions));

//app.options('*', cors(corsOptions)) // include before other routes

app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// default value for title local
app.locals.title = 'RetroShop API Server';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/', index);
app.use('/', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
