const Sequelize = require("sequelize");

const connection = new Sequelize(
  "nodejscoursedb_5",
  "nodejsuser",
  "fTsvvQHyCIBo0r2R",
  {
    host: "node.voznisoft.com",
    dialect: "mysql"
  }
);

module.exports = connection;

