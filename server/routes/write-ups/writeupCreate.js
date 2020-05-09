const express = require('express');
const router = express.Router();

const dbConnect = require('../../utils/dbConnect');
const Writeup = require('../../Models/Writeup');

dbConnect();

function routes(app) {
  router.post('/write-ups/writeupCreate', async (req, res) => {
    const { method } = req;

    switch (method) {
      case 'GET':
        try {
          const writeup = await Writeup.find({});
          res.status(200).json({ success: true, data: writeup });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case 'POST':
        try {
          const writeup = await Writeup.create(req.body);

          res.status(201).json({ success: true, data: writeup });
        } catch (error) {
          res.status(400).json({ success: false, message: console.log(error) });
        }

        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  });

  return router;
}

module.exports = routes;
