const mongoose = require('mongoose');
import slug from 'slug';

const WriteupSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  details: {
    required: true,
    type: String,
  },
  date: {
    type: String,
  },
  slug: {
    type: String,
  },
});

WriteupSchema.pre('save', function (next) {
  this.slug = slug(this.title);
  next();
});

module.exports = mongoose.models.Writeup || mongoose.model('Writeup', WriteupSchema);
