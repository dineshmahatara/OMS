const express=require('express')
const router=express.Router()
const officials = require('../model/officials')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const upload = require('../middleware/uploadMiddleware')
const officials =require('../controller/officials');
const officials = require('../model/officials');
router.post('/registerofficials', upload,officials.registerofficials)
router.post('/login', officials.loginUser)
router.get('/avatar/:id',officials.getAvatar)
module.exports=router;
