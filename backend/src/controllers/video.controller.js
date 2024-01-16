const videoModel = require("../models/video.model");

const add = async (req, res, next) => {
  try {
    const video = req.body;
    const [result] = await videoModel.create(video);
    // console.info(result);
    if (result.insertId) {
      const [[newVideo]] = await videoModel.findById(result.insertId);
      console.info(result.insertId);
      res.status(201).json(newVideo);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
};
