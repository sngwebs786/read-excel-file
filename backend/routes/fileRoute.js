const express = require("express");
const router = express.Router();
const { getFile } = require("../controllers/fileControllers");

router.post("/getFile", getFile);

module.exports = router;
