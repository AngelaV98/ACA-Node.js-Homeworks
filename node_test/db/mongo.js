const mongoose = require("mongoose");

const connect = ()=>{
   return mongoose.connect(
        "mongodb+srv://nodejscourseuser:fTsvvQHyCIBo0r2R@cluster13-jgzek.mongodb.net/nodejscoursedb_5?retryWrites=true&w=majority",
        { useNewUrlParser: true }
    );
}

module.exports = connect;

