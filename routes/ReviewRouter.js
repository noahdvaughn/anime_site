const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/all', controller.GetReviews)
Router.get('/by-user/:userId', controller.GetReviewsByUserId)
Router.get('/by-anime/:animeId', controller.GetReviewsByAnimeId)
Router.post('/create', controller.CreateReview)
Router.put('/update/:reviewId', controller.UpdateReview)
Router.delete('/delete/:reviewId', controller.DeleteReview)

module.exports = Router
