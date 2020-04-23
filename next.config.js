require('dotenv').config();
const withFonts = require('next-fonts');
module.exports = withFonts(), {
  env: {
    MONGO_URI: process.env.MONGO_URI,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};
