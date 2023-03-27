'use strict';
const {
  Model
} = require('sequelize');
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
  Recommendation.init({
    userId: DataTypes.INTEGER,
    animeId: DataTypes.INTEGER,
    recommendedId: DataTypes.INTEGER,
    body: DataTypes.STRING,
    upvotes: DataTypes.INTEGER,
    downvotes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recommendation',
  });
  return Recommendation;
};