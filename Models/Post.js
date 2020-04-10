const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String
  },
  details: {
    type: String
  },
  date: {
    type: String
  }
})

module.exports = mongoose.models.Post || mongoose.model('post', PostSchema);

