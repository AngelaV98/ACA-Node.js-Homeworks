const yargs = require("yargs");

const emitter = require("./methods");

yargs.options({
  city: { type: "string", describe: "The city" }
});

const argv = yargs
  .command({
    command: "get",
    alias: "g",
    describe: "Get weather",
    handler(data) {
      emitter.emit("get", data);
    }
  })
  .help().argv;
