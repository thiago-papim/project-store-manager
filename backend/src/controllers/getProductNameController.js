const getProductNameModel = require('../models/getProductNameModel');

const getProductName = async (req, res) => {
  const { q } = req.query;
  const result = await getProductNameModel.getProductName(q);
  res.status(200).json(result);
};

module.exports = {
  getProductName,
};