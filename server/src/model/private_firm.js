const mongoose = require('mongoose');
const FirmSchema = new mongoose.Schema({
    
FiscalYear:String,
FormName:String,
FormObjective:String,
FormType:String,
Province:String,
District:String,
Municipality:String,
WardNo:String,
Tol:String,
FormPanNo:String,
RegistrationDate:String,
FormStatus:String,
  });
  
  const Private_Firm = mongoose.model('Private_Firm', FirmSchema);
  module.exports = Private_Firm