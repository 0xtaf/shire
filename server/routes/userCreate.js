const express = require("express");
const router = express.Router();

const dbConnect = require('../utils/dbConnect');
const User = require ('../Models/User');

dbConnect();

function routes(app) {
  router.get("/moviese", (req, res) => {
    res.end("We made it! And it's great");
  });
  router.post("/userCreate", (req, res) => {
    console.log(req)
  });

  return router;
};

module.exports = routes;
