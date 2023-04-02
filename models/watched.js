'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Watched extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Watched.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      animeId: {
        type: DataTypes.INTEGER
      },
      animeName: DataTypes.STRING,
      animePic: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Watched',
      tableName: 'watchedanimes'
    }
  )
  return Watched
}
