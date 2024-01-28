/* eslint-disable no-await-in-loop */
const videoModel = require("../models/video.model");
const tagModel = require("../models/tag.model");

const add = async (req, res, next) => {
  try {
    const video = req.body;
    video.URL_video = `${req.protocol}://${req.get("host")}/upload/${
      req.files[0].filename
    }`;
    video.thumbnail = `${req.protocol}://${req.get("host")}/upload/${
      req.files[1].filename
    }`;
    video.user_id = req.user_id;

    const [result] = await videoModel.insert(video);
    if (result.insertId) {
      const tabTagId = video.tags.split(",").map(Number);
      const addTags = [];
      for (let i = 0; i < tabTagId.length; i += 1) {
        const idTag = tabTagId[i];
        await tagModel.insertTagVideo(result.insertId, idTag);
        const [[getTag]] = await tagModel.findById(idTag);
        addTags.push(getTag);
      }
      res.status(201).json({ videoAdd: video, tags: addTags });
    } else {
      res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const [videos] = await videoModel.findAll();
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const [[video]] = await videoModel.findById(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const [updatedVideo] = await videoModel.update(
      id,
      req.body.title,
      req.body.description,
      req.body.thumbnail,
      req.body.category_id
    );

    await tagModel.removeTagByVideo(req.params.id);

    const tabNewTagId = data.tags.split(",").map(Number);
    for (let i = 0; i < tabNewTagId.length; i += 1) {
      const idNewTag = tabNewTagId[i];
      const [[newTag]] = await tagModel.findById(idNewTag);
      console.info("newTag", newTag);
      await videoModel.insertVideoTag(req.params.id, idNewTag);
      // request insert videao and tag jointure
    }
    if (updatedVideo.affectedRows > 0) res.status(201).send("ok");
    else res.status(404).send("video not found");
  } catch (error) {
    next(error);
  }
};

const removeOne = async (req, res, next) => {
  try {
    const [result] = await videoModel.destroy(req.params.id);
    if (result.affectedRows > 0) res.sendStatus(204);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  getAll,
  getOne,
  edit,
  removeOne,
};
