const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
  name:{
      type: String,
      required: true
  },
  author:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
      required: true
  },
  year:{
      type: Number,
      required: true
  },
  pages:{
      type: String
  }

})


const Book = mongoose.model("book",BookSchema);
module.exports = Book;
