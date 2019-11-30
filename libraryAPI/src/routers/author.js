const express = require("express");
const Author = require("../db/models/Author");

const router = express.Router();

// Get authors
router.get("/", async function(req, res) {
  try {
    const authors = await Author.find({});
    res.send(authors);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Add author

router.post("/", async function(req, res) {
  const { name, surname, bookId, year } = req.body;

  try {
    const author = await Author.create({
      name,
      surname,
      book: bookId
    });
    res.send(author);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.put("/", async function(req, res) {
  const { id, data } = req.body;
  try {
    const author = await Author.findByIdAndUpdate(id, data, { new: true });
    res.send(author);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.delete("/", async function(req, res) {
  const { id } = req.body;
  try {
    const author = await Author.findByIdAndRemove({ _id: id });
    res.send(author);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
