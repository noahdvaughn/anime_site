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

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/client/dist/index.html`))
// })

app.listen(PORT, () => console.log(`Server Running On Port ${PORT} . . . `))
