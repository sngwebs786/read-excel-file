const express = require("express");
const dotenv = require("dotenv");
const fileRoute = require("./routes/fileRoute");

const app = express();
dotenv.config();

const cors = require("cors");
const multer = require("multer");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors()); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend
// todo functions
app.use("/file", fileRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
