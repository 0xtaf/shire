const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportConfig = require('../config/passport');
const User = require('../Models/User');
const dbConnect = require('../utils/dbConnect');

dbConnect();

function routes(app) {
  router.get(
    '/addPost',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      const user = await User.findById({ _id: req.user._id });
      if (user.isAdmin === true)
        res.status(403).json({ isAdmin: user.isAdmin, authenticated: true });
      else console.log('no admin');
      res.status(403).json({ isAdmin: user.isAdmin, authenticated: false });
    }
  );

  router.get(
    '/authenticated',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
      const { username, isAdmin } = req.user;
      res
        .status(200)
        .json({ isAuthenticated: true, user: { username, isAdmin } });
    }
  );

  return router;
}

module.exports = routes;
