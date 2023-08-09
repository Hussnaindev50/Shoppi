const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://alex10:507284@cluster0.rlrdtag.mongodb.net/test", {
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
