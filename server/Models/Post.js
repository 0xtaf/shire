const mongoose = require('mongoose');
const slug = require('slug');

const PostSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  details: {
    required: true,
    type: String,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  slug: {
    type: String,
  },
});

PostSchema.pre('save', function (next) {
  this.slug = slug(this.title);
  next();
});


module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);
