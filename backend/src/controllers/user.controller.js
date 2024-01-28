const argon = require("argon2");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const add = async (req, res, next) => {
  try {
    const user = req.body;
    const [result] = await userModel.insert(user);

    if (result.insertId) {
      const [[newUser]] = await userModel.findById(result.insertId);
      res.status(201).json(newUser);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const [[user]] = await userModel.findByUsername(username);
    if (!user) res.sendStatus(422);
    else if (await argon.verify(user.password, password)) {
      const token = jwt.sign(
        { id: user.user_id, admin: user.Admin },
        process.env.APP_SECRET,
        {
          expiresIn: "30d",
        }
      );
      res.cookie("auth-token", token, {
        expire: "30d",
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
      });
      res.status(200).json(user);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const [users] = await userModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req, res, next) => {
  console.info("req.body.user_id", req.user_id);
  try {
    const [[user]] = await userModel.findById(req.user_id);
    console.info(user);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const getSelectedUser = async (req, res, next) => {
  try {
    const [[user]] = await userModel.findById(req.params.id);
    if (user) res.status(200).json(user);
    else res.status(404);
  } catch (error) {
    next(error);
  }
};

const logOut = (req, res, next) => {
  try {
    res.clearCookie("auth-token").sendStatus(200);
  } catch (error) {
    next(error);
  }
};

const getAllVideos = async (req, res, next) => {
  try {
    console.info("req", req.params.id);
    const [videos] = await userModel.getVideosByUserId(req.params.id);
    console.info(videos);
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

const removeOne = async (req, res, next) => {
  try {
    const [result] = await userModel.destroy(req.params.id);
    if (result.affectedRows > 0) res.sendStatus(204);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  login,
  getAll,
  getCurrentUser,
  getSelectedUser,
  logOut,
  getAllVideos,
  removeOne,
};
