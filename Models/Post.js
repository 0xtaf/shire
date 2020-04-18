const mongoose = require('mongoose');
const marked = require('marked');
const DomPurify = require('dompurify');



const PostSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  details: {
    required: true,
    type: String
  },
  date: {
    type: String
  },
})

// PostSchema.pre('validate', function(next){
//   if (this.details) {
//     this.details = DomPurify.sanitize(marked(this.details))
//   }
//   next();
// })


module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);

