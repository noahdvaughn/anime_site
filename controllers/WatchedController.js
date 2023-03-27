const { Watched } = require('../models')

const GetWatchedByUserId = async (req, res) => {
  let { userId } = req.params
  try {
    const watch = await Watched.findAll({
      where: { userId: userId }
    })
    res.status(200).send(watch)
  } catch (error) {
    throw error
  }
}
const CreateWatched = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let recBody = {
      userId: userId,
      ...req.body
    }
    let watch = await Watched.create(recBody)
    res.send(watch)
  } catch (error) {
    throw error
  }
}
const DeleteWatched = async (req, res) => {
  try {
    let watchId = parseInt(req.params.watchId)
    await Watched.destroy({ where: { id: watchId } })
    res.send({ message: `Deleted rec with an ID of ${watchId}!` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetWatchedByUserId,
  CreateWatched,
  DeleteWatched
}
