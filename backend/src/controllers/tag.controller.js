const tagModel = require("../models/tag.model");

const getAll = async (req, res, next) => {
  try {
    const [tag] = await tagModel.findAll();
    res.status(200).json(tag);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };
