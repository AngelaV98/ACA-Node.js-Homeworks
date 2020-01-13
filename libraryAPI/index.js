const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const winston = require("./src/config/winston");
const db = require("./src/db/db.js");
const bookRouter = require("./src/routers/book");
const authorRouter = require("./src/routers/author");

const app = express();

app.use(cors());
app.use(morgan("combined", { stream: winston.stream }));

app.use(express.json());
app.use("/api/book", bookRouter);
app.use("/api/author", authorRouter);

app.get("/", function(req, res) {
  res.send("/ GET");
});

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server is running on ${port} port`));
