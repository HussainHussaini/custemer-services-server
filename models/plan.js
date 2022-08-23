const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const planSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  
});

module.exports = mongoose.model('Plan', planSchema);
