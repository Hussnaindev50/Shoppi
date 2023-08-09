const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRoute = require("./Routes/user_route");
const path = require("path");
const productRoute = require("./Routes/product_route");
const connectDatabase = require("./DB/db");
require("dotenv").config({ path: "./.env" });
connectDatabase();
app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(productRoute);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// const streamifier = require("streamifier");
// const cloudinary = require("cloudinary").v2;
//S3 Bucket
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadFile, getFileStream } = require("./s3");
app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file;
  console.log(file);
  const result = await uploadFile(file);
  await unlinkFile(file.path);
  console.log(result);
  const description = req.body.description;
  res.send({ imagePath: `/images/${result.Key}` });
});

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: "dsexkg8vl",
//   api_key: "519243672749836",
//   api_secret: "QoUhgdOk52wTLptzfT4pVuNwlvg",
// });
// //Destination where image to be saved
// const storage = multer.memoryStorage();
// const upload = multer({ dest: "upload" });

// app.post("/upload", upload.single("file"), async (req, res) => {
//   try {
//     console.log("Received file:", req.file);

//     if (!req.file) {
//       return res.status(400).json({ error: "No file received" });
//     }
//     //const readableStream = streamifier.createReadStream(req.file.buffer);
//     //  const result = await cloudinary.uploader.upload(readableStream);
//     // const result = await cloudinary.uploader.upload(req.file.buffer);
//     console.log("Image uploaded to Cloudinary:");
//     res.json("result");
//   } catch (error) {
//     console.error("Error uploading image to Cloudinary:", error);
//     res.status(500).json({ error: "Image upload failed" });
//   }
// });

app.use(express.static(path.join(__dirname, "./client/e-shop/build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./client/e-shop/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
