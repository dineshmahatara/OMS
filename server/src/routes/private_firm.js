const express=require('express')
const router=express.Router()
const PrivateFirms = require('../model/private_firm')
const PrivateFirm = require('../controller/private_firm');
router.post('/registerPrivateFirm', PrivateFirm.registerPrivateFirm)
router.get('/showPrivateFirm', PrivateFirm.showPrivateFirm)
router.delete('/deletePrivateFirm:id', PrivateFirm.deletePrivateFirm)
module.exports=router;
