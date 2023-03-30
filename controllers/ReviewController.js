const { Review } = require('../models')
const GetReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll()
    res.send(reviews)
  } catch (error) {
    throw error
  }
}
const GetReviewsByUserId = async (req, res) => {
  let { userId } = req.params
  try {
    const reviews = await Review.findAll({
      where: { userId: userId }
    })
    res.status(200).send(reviews)
  } catch (error) {
    throw error
  }
}
// const GetReviewsByAnimeId = async (req, res) => {
//   let { animeId } = req.params
//   try {
//     const reviews = await Review.findAll({
//       where: { animeId: animeId }
//     })
//     res.status(200).send(reviews)
//   } catch (error) {
//     throw error
//   }
// }
const CreateReview = async (req, res) => {
  try {
    let reviewBody = {
      ...req.body
    }
    let review = await Review.create(reviewBody)
    res.send(review)
  } catch (error) {
    throw error
  }
}
const UpdateReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.reviewId)
    const updatedReview = await Review.update(
      { ...req.body },
      {
        where: { id: reviewId },
        returning: true
      }
    )
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}
const DeleteReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.reviewId)
    await Review.destroy({ where: { id: reviewId } })
    res.send({ message: `Deleted rec with an ID of ${reviewId}!` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetReviews,
  GetReviewsByUserId,
  // GetReviewsByAnimeId,
  CreateReview,
  UpdateReview,
  DeleteReview
}
