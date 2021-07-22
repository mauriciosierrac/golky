const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/iecho', require('./routes/invertString'))
app.use('/', require('./routes/invertString'))

// run server

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000!!!')
})

module.exports = app
