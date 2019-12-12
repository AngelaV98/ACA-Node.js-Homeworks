const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
  createDate: {
    type: String
  },
  requiredDate: {
    type: String
  },
  shippedDate: {
    type: String
  },
  status: {
    type: String
  },
  comments: {
    type: String
  }
});
const Order = mongoose.model("order", OrderSchema);
module.exports = Order;