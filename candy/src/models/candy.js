'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Candy.init({
    candyname: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    quantity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Candy',
  });
  return Candy;
};