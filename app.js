require('dotenv').config()
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

const app = express()
//db setup
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI) 

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')    
}) 

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
}); 
//server static react files
app.use(express.static(__dirname + '/client/build/'))
app.get('/', (req,res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
const users = require('./routes/users')
// const city = require('./routes/city')
// const arch = require('./routes/arch')
app.use('/api/users', users)
// app.use('/api/city', city)
// app.use('/api/city/:cityId/arch', arch)
// error handler

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})


app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})


module.exports = app
