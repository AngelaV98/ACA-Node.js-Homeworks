const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://user:root@library-6jjob.mongodb.net/library?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
};

connect()
  .then(async connection => {
    console.log("ok");
  })
  .catch(error => console.log(error));
