const createTokenService = require('../models/createToken');

const createTokenController = (req, res) => {
  if (req.body.name && req.body.city && req.body.postal_code && req.body.number && req.body.expiration_month && req.body.expiration_year && req.body.security_code) {
    createTokenService(req.body.name, req.body.city, req.body.postal_code, req.body.number, req.body.expiration_month, req.body.expiration_year, req.body.security_code, res)
  } else if (!req.body.name && req.body.city && req.body.postal_code && req.body.number && req.body.expiration_month && req.body.expiration_year && req.body.security_code) {
    res.status(400).json({
      message: 'Input name not found value.',
    });
  } else if (req.body.name && !req.body.city && req.body.postal_code && req.body.number && req.body.expiration_month && req.body.expiration_year && req.body.security_code) {
    res.status(400).json({
      message: 'Input city not found value.',
    });
  } else if (req.body.name && req.body.city && !req.body.postal_code && req.body.number && req.body.expiration_month && req.body.expiration_year && req.body.security_code) {
    res.status(400).json({
      message: 'Input postal_code not found value.',
    });
  } else if (req.body.name && req.body.city && req.body.postal_code && !req.body.number && req.body.expiration_month && req.body.expiration_year && req.body.security_code) {
    res.status(400).json({
      message: 'Input number not found value.',
    });
  } else if (req.body.name && req.body.city && req.body.postal_code && req.body.number && !req.body.expiration_month && req.body.expiration_year && req.body.security_code) {
    res.status(400).json({
      message: 'Input expiration_month not found value.',
    });
  } else if (req.body.name && req.body.city && req.body.postal_code && req.body.number && req.body.expiration_month && !req.body.expiration_year && req.body.security_code) {
    res.status(400).json({
      message: 'Input expiration_year not found value.',
    });
  } else if (req.body.name && req.body.city && req.body.postal_code && req.body.number && req.body.expiration_month && req.body.expiration_year && !req.body.security_code) {
    res.status(400).json({
      message: 'Input security_code not found value.',
    });
  } else {
    res.status(400).json({
      message: 'Input name, city, postal_code, number, expiration_month, expiration_year and security_code not found value.',
    });
  }
}

module.exports = createTokenController;