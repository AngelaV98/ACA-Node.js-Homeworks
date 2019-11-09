// Create CLI node project(in js and ts)
// which will get commands to CRUD(create, read, update, delete)
// and will be save data in some json file.
const yargs = require("yargs");

const emitter = require("./methods");

yargs.options({
  id: { type: "number", describe: "user id" },
  name: { type: "string", describe: "user name" },
  age: { type: "number", describe: "user age" }
});

// Get users
const argv = yargs
  .command({
    command: "get",
    alias: "g",
    describe: "Get users",
    handler() {
      emitter.emit("get");
    }
  })
  .command({
    command: "create",
    alias: "c",
    describe: "Create a user",
    handler(user) {
      emitter.emit("create", user);
    }
  })
  .command({
    command: "update",
    alias: "u",
    describe: "Update the existing user",
    handler(user) {
      emitter.emit("update", user);
    }
  })
  .command({
    command: "delete",
    alias: "d",
    describe: "",
    handler(id) {
      console.log();
      emitter.emit("delete", id);
    }
  })
  .help().argv;
