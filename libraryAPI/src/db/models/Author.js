const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
  name:{
      type: String,
      required: true
  },
  surname:{
      type: String,
      required: true
  },
  book:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "books",

  }

})


const Author = mongoose.model("author",AuthorSchema);
module.exports = Author;
