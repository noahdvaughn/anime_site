const Router = require('express').Router()
const MALRouter = require('./MALRouter')
const RecRouter = require('./RecRouter')
const ReviewRouter = require('./ReviewRouter')
const AuthRouter = require('./AuthRouter')
const AnimeRouter = require('./AnimeRouter')

Router.use('/mal', MALRouter)
Router.use('/rec', RecRouter)
Router.use('/review', ReviewRouter)
Router.use('/auth', AuthRouter)
Router.use('/anime', AnimeRouter)

module.exports = Router
