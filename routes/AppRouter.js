const Router = require('express').Router()
const MALRouter = require('./MALRouter')
const RecRouter = require('./RecRouter')
const ReviewRouter = require('./ReviewRouter')
const AuthRouter = require('./AuthRouter')
const AnimeRouter = require('./AnimeRouter')
const WatchedRouter = require('./WatchedRouter')

Router.use('/mal', MALRouter)
Router.use('/rec', RecRouter)
Router.use('/review', ReviewRouter)
Router.use('/auth', AuthRouter)
Router.use('/anime', AnimeRouter)
Router.use('/watched', WatchedRouter)

module.exports = Router
