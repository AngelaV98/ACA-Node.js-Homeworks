const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const products = require("./routers/products");

const syncReportDatabase = require("./utills/syncReportDatabase");
const getReportingData = require("./utills/getReportingData");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/api/products", products);

const port = process.env.port || 5000;

app.get("/", async (req, res) => {
  res.send("/ GET");
});

// syncReportDatabase();
app.listen(port, () => console.log(`Server is running on port ${port}`));
