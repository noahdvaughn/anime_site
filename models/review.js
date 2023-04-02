'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init(
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
      userName: DataTypes.STRING,
      userPic: DataTypes.STRING,
      animeName: DataTypes.STRING,
      animePic: DataTypes.STRING,
      body: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      yearCreated: DataTypes.INTEGER,
      genre: DataTypes.ARRAY(DataTypes.STRING)
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
