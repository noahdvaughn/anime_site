const { Anime } = require('../models')

const CreateAnime = async (req, res) => {
  try {
    console.log({ ...req.body })
    const response = await Anime.create({ ...req.body })
    res.send(response)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateAnime
}
