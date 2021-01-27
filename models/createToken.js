require('dotenv').config()

var omise = require('omise')({
  'publicKey': process.env.OMISE_PUBLICKEY,
  'secretKey': process.env.OMISE_SECRETKEY,
  'omiseVersion': '2015-09-10'
});

function createTokenService(name, city, postal_code, number, expiration_month, expiration_year, security_code, res) {
  omise.tokens.create({
    'card':{
      'name': name,
      'city': city,
      'postal_code': postal_code,
      'number': number,
      'expiration_month': expiration_month,
      'expiration_year': expiration_year,
      'security_code': security_code
    }
  }, function(err, token) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(token);
    }
  });
}

module.exports = createTokenService;
