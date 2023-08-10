const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.DATA_BASE;
const connectDatabase = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongodb connected with server");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDatabase;
