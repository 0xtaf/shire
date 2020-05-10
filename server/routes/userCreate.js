const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportConfig = require('../config/passport');
const JWT = require('jsonwebtoken');

const dbConnect = require('../utils/dbConnect');

const User = require('../Models/User');

dbConnect();

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: 'TayfunSur',
      sub: userID,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

function routes(app) {
  router.post('/userCreate', async (req, res, next) => {
    const { username, password, isAdmin } = req.body;

    try {
      const userFound = await User.findOne({ username });
      if (userFound) {
        res.status(400).json({ message: 'Username is already taken' });
      } else {
        const userInput = {
          username: req.body.username,
          password: req.body.password,
        };
        const user = new User(userInput);
        await user.save();
        res.status(201).json({ success: true, data: user });
      }
    } catch (err) {
      return next(err);
    }
  });

  router.get(
    '/panel-login',
    passport.authenticate('local', { session: false }),
    (req, res, next) => {
      if (req.isAuthenticated()) {
        console.log(req.user);
      } else {
        console.log('not oten');
      }
    }
  );
  router.post(
    '/panel-login',
    passport.authenticate('local', { session: false }),
    (req, res, next) => {
      if (req.isAuthenticated()) {
        const { _id, username, isAdmin } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res
          .status(200)
          .json({ token });
      }
    }
  );

  router.get(
    '/logout',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
      res.clearCookie('access_token');
      res.json({ user: { username: '' }, success: true });
    }
  );

  return router;
}

module.exports = routes;
