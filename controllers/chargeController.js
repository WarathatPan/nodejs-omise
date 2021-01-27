const chargeService = require('../models/charge');

const chargeController = (req, res) => {
  if (req.body.description && req.body.amount && req.body.token) {
    chargeService(req.body.description, req.body.amount, req.body.token, res);
  } else if (!req.body.description && req.body.amount && req.body.token) {
    res.status(400).json({
      message: 'Input description not found value.',
    });
  } else if (req.body.description && !req.body.amount && req.body.token) {
    res.status(400).json({
      message: 'Input amount not found value.',
    });
  } else if (req.body.description && req.body.amount && !req.body.token) {
    res.status(400).json({
      message: 'Input token not found value.',
    });
  } else {
    res.status(400).json({
      message: 'Input description, amount and token not found value.',
    });
  }
}

module.exports = chargeController;