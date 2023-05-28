const Private_Firms = require('../model/private_firm')

const registerPrivateFirm= async (req, res) => {
  console.log(req.body)
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
const showPrivateFirm= async (req, res) => {
  console.log(req.body)
    const data = await Private_Firms.find()
    res.json({data:data})
    console.log(data)
    }
    const deletePrivateFirm= async (req, res) => {
      console.log(req.body)
        const data = await Private_Firms.findByIdAndDelete({ FormPanNo: req.body.FormPanNo })
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
    showPrivateFirm,
    deletePrivateFirm
  
    }