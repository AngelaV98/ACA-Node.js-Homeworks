import { readFile, writeFile } from "fs";
import EventEmitter from "events";

const path = "./users.json";
const emitter = new EventEmitter();

emitter.on("get", function getUser() {
  readFile(path, function (err: any, data: any) {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.parse(data));
    }
  });
});

emitter.on("create", function createUser(user: any) {
  delete user._;
  delete user.$0;

  readFile(path, function (err: any, data: any) {
    if (err) {
      console.log(err);
    } else {
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === user.id) {
          return;
        }
      }
      data.push(user);
      data = JSON.stringify(data);
      writeFile (path, data, function (err: any) {
        if (err) {
          console.log(err);
        } else {
          console.log("Succeed");
        }
      });
    }
  });
});

emitter.on("update", function updateUser(user) {
  delete user._;
  delete user.$0;

  readFile(path, function (err: any, data: any) {
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
      writeFile (path, JSON.stringify(data), function (err: any) {
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
  readFile(path, function (err: any, data: any) {
    if (err) {
      console.log(err);
    } else {
      data = JSON.parse(data).filter((elem: any) => elem.id != id);
      writeFile (path, JSON.stringify(data), function (err: any) {
        if (err) {
          console.log(err);
        } else {
          console.log("Succeed");
        }
      });
    }
  });
});

export default emitter;
