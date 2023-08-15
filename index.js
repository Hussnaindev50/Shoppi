const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./Routes/all_routes");
const connectDatabase = require("./DB/db");
require("dotenv");
connectDatabase();
app.use(express.json());
app.use(routes);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
