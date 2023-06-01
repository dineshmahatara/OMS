const Private_Firms = require('../model/private_firm')

const registerPrivateFirm= async (req, res) => {
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
const getPrivateFirm= async (req, res) => {
  // console.log(req.body)
    const data = await Private_Firms.find({Formstatus: req.query.Formstatus}).skip((req.query.page-1 )* 2).limit(8)
    res.json({
      firmsList:data
    })
    // console.log(data)
    }
const getPrivateFirmById= async (req, res) => {
  // console.log(req.body)
    const data = await Private_Firms.findById(req.params.id,)
    res.json({
      firmsList:data
    })
    // console.log(data)
    }
    const deletePrivateFirm= async (req, res) => {
      // console.log(req.body)
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
    getPrivateFirm,
    deletePrivateFirm,
    getPrivateFirmById
  
    }