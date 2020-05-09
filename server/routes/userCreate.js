const express = require('express');
const router = express.Router();

const dbConnect = require('../utils/dbConnect');
const User = require('../Models/User');

dbConnect();

function routes(app) {
  router.post('/userCreate', async (req, res, next) => {
    const userInput = {
      username: req.body.username,
      password: req.body.password,
    };
    const user = new User(userInput);
    try {
      await user.save()
      res.status(201).json({ success: true, data: user });
    } catch (err) {
      return next(err)
    }    
  });

  return router;
}

module.exports = routes;
