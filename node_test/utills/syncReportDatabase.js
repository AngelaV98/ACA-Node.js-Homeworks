const mongoose = require("mongoose");

const connection = require("../db/mongo");
const Orders = require("../models/Orders");
const OrdersModel = require("../models/OrdersModel");

connection();

const syncReportDatabase = async _ => {
  connection.dropCollection("orders");
  Orders.query(
    `SELECT o.id, o.createdDate, o.status, o.comments, c.id, c.name, c.phone 
      FROM orders o INNER JOIN customers c ON o.customerId=c.id 
      SELECT od.productId, od.quantityOrdered, od.priceEach p.code as productCode, p.name as productName, p.description as productDesciption 
      FROM orderdetails od INNER JOIN products p ON od.productId=p.id WHERE od.orderId=10100`
  )
    .then(async orders => {
      console.log(order);

      try {
        const order = await OrdersModel.create({
          createDate,
          requiredDate,
          shippedDate,
          status,
          comments
        });
        res.send(order);
      } catch (err) {
        res.status(404).send(err);
      }
      res.status(200).json(orders);
    })
    .catch(err => res.status(400).json(err));
};

module.exports = syncReportDatabase;