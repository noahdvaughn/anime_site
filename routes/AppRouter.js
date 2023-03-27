const Router = require('express').Router()
const MALRouter = require('./MALRouter')

Router.use('/mal', MALRouter)

module.exports = Router
