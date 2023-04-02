'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      bio: DataTypes.STRING,
      email: DataTypes.STRING,
      profile_pic: DataTypes.STRING,
      friend_list: DataTypes.ARRAY(DataTypes.INTEGER),
      watched_list: DataTypes.ARRAY(DataTypes.INTEGER),
      upvoted: DataTypes.ARRAY(DataTypes.INTEGER),
      downvoted: DataTypes.ARRAY(DataTypes.INTEGER)
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
