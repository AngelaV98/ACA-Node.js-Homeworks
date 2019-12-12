const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  create,
  update,
  remove
} = require("../controllers/products");

router.get("/", getAll);
router.post("/", create);
router.put("/", update);
router.delete("/", remove);

module.exports = router;

