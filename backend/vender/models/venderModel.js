const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venderSchema = new Schema({
  name: {
    type: String,
  },
  discription: {
    type: String,
  },
  venderName: {
    type: String,
  },

  
}, {timestamps: true});


module.exports = mongoose.model('VenderService', venderSchema); 
