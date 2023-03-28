const Router = require('express').Router()
const controller = require('../controllers/RecommendationController')

Router.get('/all', controller.GetRecs)
Router.get('/by-user/:userId', controller.GetRecsByUserId)
Router.get('/by-anime/:animeId', controller.GetRecsByAnimeId)
Router.post('/create', controller.CreateRec)
Router.put('/update/:recId', controller.UpdateRec)
Router.delete('/delete/:redId', controller.DeleteRec)

module.exports = Router
