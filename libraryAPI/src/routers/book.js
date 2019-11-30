const express = require("express");

const Book = require("../db/models/Book");

const router = express.Router();

// Get books
router.get("/", async function(req, res) {
  try {
    const books = await Book.find({});
    res.send(books);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Add book

router.post("/", async function(req, res) {
  const { name, authorId, year } = req.body;
  console.log(req.body);
  console.log(name, authorId, year);
  try {
    const book = await Book.create({
      name,
      author: authorId,
      year
    });
    res.send(book);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.put("/", async function(req, res) {
  const { id, data } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(id, data, { new: true });
    res.send(book);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.delete("/", async function(req, res) {
  const { id } = req.body;
  try {
    const book = await Book.findByIdAndRemove({ _id: id });
    res.send(book);
  } catch (err) {
    res.status(404).send(err);
  }
});
module.exports = router;
