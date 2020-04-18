const withCSS = require('@zeit/next-css');

module.exports = {
  cssModules: true,
  env: {
    MONGO_URI:
      'mongodb+srv://taf:268451881@cluster0-a420i.mongodb.net/blog?retryWrites=true&w=majority',
  },
};
