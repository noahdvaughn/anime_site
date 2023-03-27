'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anime.belongsToMany(models.User, {
        as: 'watched',
        through: models.Watched,
        foreignKey: 'animeId'
      })
      Anime.belongsToMany(models.User, {
        as: 'review',
        through: models.Review,
        foreignKey: 'animeId'
      })
      Anime.belongsToMany(models.User, {
        as: 'recommendation',
        through: models.Recommendation,
        foreignKey: 'animeId'
      })
    }
  }
  Anime.init(
    {
      name: DataTypes.STRING,
      picture: DataTypes.STRING,
      malId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Anime',
      tableName: 'animes'
    }
  )
  return Anime
}
