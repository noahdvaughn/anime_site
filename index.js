const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AppRouter = require('./routes/AppRouter')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
// app.use(express.static(path.join(`${__dirname}/client/dist`)))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', AppRouter)

app.get('/', (req, res) => {
  res.send('This is the base path!')
})

app.options('/url...', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST')
  res.header('Access-Control-Allow-Headers', 'accept, content-type')
  res.header('Access-Control-Max-Age', '1728000')
  return res.sendStatus(200)
})

app.listen(PORT, () => console.log(`Server Running On Port ${PORT} . . . `))
