const res = require("express/lib/response");

const getFile = async (req, res) => {
  console.log("Get file chl rha h");

  console.log(req.body);
};

module.exports = { getFile };
