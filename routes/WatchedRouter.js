const Router = require('express').Router()
const controller = require('../controllers/WatchedController')

Router.get(`/by-user/:userId`, controller.GetWatchedByUserId)
Router.put(`/create/:userId`, controller.CreateWatched)
Router.delete(`/delete/:watchId`, controller.DeleteWatched)

module.exports = Router
