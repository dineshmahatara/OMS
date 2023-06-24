const express = require('express')
const cors = require('cors')
const dbConnect = require('./connection/dbConnect')
const userRoute = require('./routes/user')
const privateFirmRoute = require('./routes/private_firm')

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors())
require('dotenv').config()
const port = process.env.PORT
dbConnect()
app.use(express.json({ limit: '50mb' }));

app.use('/', userRoute)
app.use('/', privateFirmRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
