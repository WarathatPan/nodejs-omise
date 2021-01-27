const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');

// Controllers
const createTokenController = require('./controllers/createTokenController')
const chargeController = require('./controllers/chargeController');

require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

const port = process.env.PORT || 4444;

app
  .post('/api/createToken', createTokenController)
  .post('/api/charge', chargeController)

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

module.exports = app;
