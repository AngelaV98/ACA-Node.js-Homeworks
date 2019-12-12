const connection = require("../db/mongo");
const Orders = require("../models/OrdersModel");

const getReportingData = async () => {
  try {
    const orders = await Orders.find({});
    return orders;
  } catch (err) {
    return err;
  }
};

module.exports = getReportingData;