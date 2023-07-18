'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
  
    static associate(models) {
      // define association here
      this.belongsTo(models.Category,{
        foreignKey:'category_id',
        as: 'category'
      })
    }
  }
  Product.init({
    category_Id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    model: DataTypes.STRING,
    size: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: true
  });
  return Product;
};