const officials = require('../model/officials')
const path = require('path')
const fs =require('fs')
const officials = require('../model/officials')

const registerofficials= async (req, res) => {
    const data = await officials.findOne({ phoneNumber: req.body.phoneNumber })
    if (data) {
      res.json({
        msg: 'User Already Exist',
        success: false
      })
    } else {
     
        req.body.avatarName= req?.file?.filename 
        const data = await Users.create(req.body)
        if (data) {
          res.json({
            msg: "Register success",
            success: true
          })
        }
      }
    }
  

  const getAvatar =  async (req, res) => {
    const userData = await Users.findById(req.params.id)
    const userImage = path.join(__dirname, '../../uploads/avatar', userData.avatarName )
    console.log(userImage)
    const defaultImage = path.join(__dirname, '../../uploads/avatar', userData.avatarName )
    if(fs.existsSync(userImage)){
      res.sendFile(userImage)
    }else{
      res.sendFile(defaultImage)
    }
  
  }
  
  module.exports = {
    registerofficials,
      getAvatar
    }