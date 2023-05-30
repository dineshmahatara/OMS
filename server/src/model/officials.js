const mongoose = require('mongoose');
const officialsSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    phoneNumber: String,
    email: String,
    desigination: String,
    officeName: String,
    gender: String,
    avatarName: {type: String, default: 'defaultAvatar.png'}
  });
  
  const Officials = mongoose.model('Officials', officialsSchema);
  module.exports = Officials