const { Recommendation } = require('../models')

const GetRecs = async (req, res) => {
  try {
    const recs = await Recommendation.findAll()
    res.status(200).send(recs)
  } catch (error) {
    throw error
  }
}
const GetRecsByUserId = async (req, res) => {
  let { userId } = req.params
  try {
    const recs = await Recommendation.findAll({
      where: { userId: userId }
    })
    res.status(200).send(recs)
  } catch (error) {
    throw error
  }
}
const GetRecsByAnimeId = async (req, res) => {
  let { animeId } = req.params
  try {
    const recs = await Recommendation.findAll({
      where: { animeId: animeId }
    })
    res.status(200).send(recs)
  } catch (error) {
    throw error
  }
}
const CreateRec = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let recBody = {
      userId: userId,
      ...req.body
    }
    let rec = await Recommendation.create(recBody)
    res.send(rec)
  } catch (error) {
    throw error
  }
}
const UpdateRec = async (req, res) => {
  try {
    let recId = parseInt(req.params.recId)
    const updatedRec = await Recommendation.update(
      { ...req.body },
      {
        where: { id: recId },
        returning: true
      }
    )
    res.send(updatedRec)
  } catch (error) {
    throw error
  }
}
const DeleteRec = async (req, res) => {
  try {
    let recId = parseInt(req.params.recId)
    await Recommendation.destroy({ where: { id: recId } })
    res.send({ message: `Deleted rec with an ID of ${recId}!` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRecs,
  GetRecsByUserId,
  GetRecsByAnimeId,
  CreateRec,
  UpdateRec,
  DeleteRec
}
