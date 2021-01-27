require('dotenv').config()

var omise = require('omise')({
  'publicKey': process.env.OMISE_PUBLICKEY,
  'secretKey': process.env.OMISE_SECRETKEY,
  'omiseVersion': '2015-09-10'
});

function chargeService(description, amount, token, res) {
  omise.charges.create({
    'description': description,
    'amount': amount, // 1,000 Baht
    'currency': 'thb',
    'capture': false,
    'card': token
  }, function(err, resp) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(resp);
    }
  });
}

module.exports = chargeService;
