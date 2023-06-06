const Private_Firms = require('../model/private_firm')

const registerPrivateFirm = async (req, res) => {
  // console.log(req.body)
  const data = await Private_Firms.findOne({ FormPanNo: req.body.FormPanNo })
  if (data) {
    res.json({
      msg: 'This Firm is Already Exists',
      success: false
    })
  } else {
    const data = await Private_Firms.create(req.body)
    if (data) {
      res.json({
        msg: "Register success",
        success: true
      })
    }
  }
}
const getPrivateFirm = async (req, res) => {
  // console.log(req.body)
  const data = await Private_Firms.find({ Formstatus: req.query.Formstatus }).skip((req.query.page - 1) * 2).limit(8)
  res.json({
    firmsList: data
  })
  // console.log(data)
}
const getPrivateFirmById = async (req, res) => {

  try {
    const id = req.params.id;

    const form = await Private_Firms.findById(id);

    if (!form) {
      return res.status(404).json({ error: 'form not found' });
    }

    res.json(form)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// // console.log(req.body)
//   const data = await Private_Firms.findById(req.params.id,)
//   res.json({
//     firmsList:data
//   })
//   // console.log(data)
//   }
const editPrivateFirmById = async (req, res) => {
  const updatedData = req.body;
  try {
    const data = await Private_Firms.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    if (data) {
      res.json({
        msg: 'Data Edited',
        data: data
      });
    } else {
      res.status(404).json({
        msg: 'Failed to find document'
      });
    }
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({
      msg: 'Internal Server Error'
    });
  }
};

const deletePrivateFirm = async (req, res) => {
  // console.log(req.body)
  const data = await Private_Firms.findByIdAndDelete(req.params.id )
  if (data) {
    res.json({
      msg: 'This Firm has deleted',

    })
  } else {
    if (data) {
      res.json({
        msg: "Firm can not deleted",

      })
    }
  }
}

module.exports = {
  registerPrivateFirm,
  getPrivateFirm,
  editPrivateFirmById,
  deletePrivateFirm,
  getPrivateFirmById

}