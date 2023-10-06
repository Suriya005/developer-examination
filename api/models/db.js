const mongoose = require("mongoose");
const {config} = require("../config/config.js");

mongoose.connect(
  "mongodb+srv://" + config.username + ":"+ config.password + "@recruitment.mos8yva.mongodb.net/"+ config.database,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;
