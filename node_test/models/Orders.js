const connection = require("../db/db");
const Sequelize = require("sequelize");

const Orders = connection.define(
    "orders",
    {
        createDate: Sequelize.STRING,
        requiredDate: Sequelize.STRING,
        shippedDate: Sequelize.STRING,
        status: Sequelize.STRING,
        comments: Sequelize.STRING
    },
    {
        timestamps: false
    }
);
module.exports = Orders;
