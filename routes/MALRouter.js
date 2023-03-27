const Router = require('express').Router()
const controller = require('../controllers/MALController')

Router.get('/seasonal', controller.GetSeasonalAnime)
Router.get('/details/:animeId', controller.GetAnimeDetails)
Router.get('/search/:searchQuery', controller.SearchAnime)

module.exports = Router
