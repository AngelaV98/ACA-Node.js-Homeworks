const connection = require("../db/db");
const Sequelize = require("sequelize");

const Products = connection.define(
  "products",
  {
    code: Sequelize.STRING,
    name: Sequelize.STRING,
    scale: Sequelize.STRING,
    vendor: Sequelize.STRING,
    description: Sequelize.STRING,
    quantityInStock: Sequelize.INTEGER,
    buyPrice: Sequelize.FLOAT,
    MSRP: Sequelize.FLOAT,
    productlineId: Sequelize.INTEGER
  },
  {
    timestamps: false
  }
);
module.exports = Products;
