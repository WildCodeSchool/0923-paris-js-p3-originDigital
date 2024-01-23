const categoryModel = require("../models/category.model");

const getAll = async (req, res, next) => {
  try {
    const [category] = await categoryModel.findAll();
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };
