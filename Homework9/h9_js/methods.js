const fs = require("fs");
const EventEmitter = require("events");

const path = "./users.json";
const emitter = new EventEmitter();

emitter.on("get", function getUser() {
  fs.readFile(path, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.parse(data));
    }
  });
});

emitter.on("create", function createUser(user) {
  delete user._;
  delete user.$0;
  console.log(user);
  let b = true;
  fs.readFile(path, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == user.id) {
          return;
        }
      }
      data.push(user);
      data = JSON.stringify(data);
      fs.writeFile(path, data, function(err, data) {
        if (err) {
          console.log(err);
        }
        {
          console.log("Succeed");
        }
      });
    }
  });
});

emitter.on("update", function updateUser(user) {
  delete user._;
  delete user.$0;

  fs.readFile(path, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == user.id) {
          data[i] = JSON.stringify(user);
          data[i] = JSON.parse(data[i]);
        }
      }
      fs.writeFile(path, JSON.stringify(data), function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("Succeed");
        }
      });
    }
  });
});
emitter.on("delete", function deleteUser({ id }) {
  fs.readFile(path, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      data = JSON.parse(data).filter(elem => elem.id != id);
      fs.writeFile(path, JSON.stringify(data), function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("Succeed");
        }
      });
    }
  });
});

module.exports = emitter;
