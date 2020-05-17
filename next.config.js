require('dotenv').config();
module.exports = {
  target: 'serverless',
  env: {
    MONGO_URI: process.env.MONGO_URI,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};
