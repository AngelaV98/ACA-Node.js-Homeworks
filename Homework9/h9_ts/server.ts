// Create CLI node project(in js and ts)
// which will get commands to CRUD(create, read, update, delete)
// and will be save data in some json file.

import * as yargs from "yargs";
import emitter from "./methods";

yargs.options({
  id: { type: "number", describe: "user id" },
  name: { type: "string", describe: "user name" },
  age: { type: "number", describe: "user age" }
});

// Get users
const argv: any = yargs
  .command({
    command: "get",
    describe: "Get users",
    handler() {
      emitter.emit("get");
    }
  })
  .command({
    command: "create",
    describe: "Create a user",
    handler(user: any) {
      emitter.emit("create", user);
    }
  })
  .command({
    command: "update",
    describe: "Update the existing user",
    handler(user: any) {
      emitter.emit("update", user);
    }
  })
  .command({
    command: "delete",
    describe: "",
    handler(id: any) {
      console.log();
      emitter.emit("delete", id);
    }
  })
  .help().argv;
