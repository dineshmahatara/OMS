const mongoose = require('mongoose');

const FirmSchema = new mongoose.Schema({
  FiscalYear: String,
  FirmRegistrationNo: String,
  FormName: String,
  FormType: String,
  Province: String,
  District: String,
  Municipality: String,
  WardNo: String,
  Tol: String,
  FormPanNo: String,
  RegistrationDate: String,
  FirmOwner: String,
  FirmOwnerCitizenNo: String,
  FirmCapital: Number,
  FirmCapitalNepali: String,
  FormObjective: String,
  FirmOwnerPhoneNumber: String,
  FirmOwnerEmail: String,
  FormStatus: String,
});

FirmSchema.pre('save', async function (next) {
  // Check if FirmRegistrationNo already exists, if so, skip the automatic generation
  if (this.FirmRegistrationNo) {
    return next();
  }

  try {
    // Count the number of documents with the matching WardNo value
    const wardNoCount = await Private_Firm.countDocuments({ WardNo: this.WardNo });

    // Generate the FirmRegistrationNo by combining FiscalYear, WardNo count, and WardNo
    this.FirmRegistrationNo = `${this.FiscalYear}-${this.WardNo}-${wardNoCount+1}`;

    next();
  } catch (error) {
    return next(error);
  }
});

const Private_Firm = mongoose.model('Private_Firm', FirmSchema);
module.exports = Private_Firm;
