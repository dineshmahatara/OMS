const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    
FiscalYear:String,
FormName:String,
FormObjective:String,
FormType:String,
District:String,
Municipality:String,
WardNo:String,
Tol:String,
FormPanNo:String,
RegistrationDate:String,
FormStatus:String,
  });
  
  const Private_Firm = mongoose.model('Private_Firm', userSchema);
  module.exports = Private_Firm