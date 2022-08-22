const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const port = 5000
const associationRoutes = require('./routes/associations')

app.use(morgan('tiny'))
app.use(cors('*'))
app.use(express.json())

app.use('/association', associationRoutes)

app.listen(port, () => {
  console.log(`Running on ${port}`)
})