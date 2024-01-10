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
    const { mail, password } = req.body;
    const [[user]] = await userModel.findByEmail(mail);
    if (!user) res.sendStatus(422);
    else if (await argon.verify(user.password, password)) {
      const token = jwt.sign(
        { id: user.user_id, admin: user.Admin },
        process.env.APP_SECRET,
        { expiresIn: "30d" }
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

module.exports = {
  add,
  login,
};
