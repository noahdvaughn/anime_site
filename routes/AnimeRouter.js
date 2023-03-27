const Router = require('express').Router()
const controller = require('../controllers/AnimeController')

Router.post('/create', controller.CreateAnime)

module.exports = Router
