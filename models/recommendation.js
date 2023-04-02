'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Recommendation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recommendation.init(
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
      recommendedId: {
        type: DataTypes.INTEGER
      },
      userName: DataTypes.STRING,
      userPic: DataTypes.STRING,
      animeName: DataTypes.STRING,
      animePic: DataTypes.STRING,
      recommendedName: DataTypes.STRING,
      body: DataTypes.STRING,
      upvotes: DataTypes.INTEGER,
      downvotes: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Recommendation',
      tableName: 'recommendations'
    }
  )
  return Recommendation
}
