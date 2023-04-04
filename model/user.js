const mongoose = require('mongoose');

const user = new mongoose.Schema({
   name:{ type:String },
   email:{ type:String},
   password:{type:String}
});

const user_model = mongoose.model('user', user);

module.exports = user_model;
  