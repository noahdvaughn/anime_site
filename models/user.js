'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Anime, {
        as: 'watched',
        through: models.Watched,
        foreignKey: 'userId'
      })
      User.belongsToMany(models.Anime, {
        as: 'review',
        through: models.Review,
        foreignKey: 'userId'
      })
      User.belongsToMany(models.Anime, {
        as: 'recommendation',
        through: models.Recommendation,
        foreignKey: 'userId'
      })
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      profile_pic: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
