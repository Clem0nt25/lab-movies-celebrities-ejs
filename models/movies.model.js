const mongoose = require('mongoose')

const celebritiesSchema = new mongoose.Schema({
  name: {
    type: String, 
  },
  occupation: {
    type: String,
  },
  catchPhrase: {
    type: String,
  }
})

const Celebrities = mongoose.model('celebrities', celebritiesSchema)

module.exports = Celebrities; 

