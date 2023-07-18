'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product,{
        foreignKey:'product_id',
        as: 'product'
      })
    }
  }
  Orders.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    invoice_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price_product: DataTypes.INTEGER,
    price_total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
    tableName: 'orders',
    timestamps: true
  });
  return Orders;
};