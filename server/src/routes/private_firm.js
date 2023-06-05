const express = require('express')
const router = express.Router()
const PrivateFirm = require('../controller/private_firm');
router.post('/registerPrivateFirm', PrivateFirm.registerPrivateFirm)
router.get('/PrivateFirm', PrivateFirm.getPrivateFirm)
router.get('/PrivateFirm/:id', PrivateFirm.getPrivateFirmById)
router.delete('/deletePrivateFirm/:id', PrivateFirm.deletePrivateFirm)
router.put('/editPrivateFirm/:id', PrivateFirm.editPrivateFirmById)
module.exports = router;
