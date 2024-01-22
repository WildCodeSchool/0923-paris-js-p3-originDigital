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

const updateUser = async (req, res) => {
  try {
    const updatedUser = await userModel.updateUser(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour de l'utilisateur :",
      error.message
    );
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.deleteUser(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    console.error(
      "Erreur lors de la suppression de l'utilisateur :",
      error.message
    );
    res.status(500).json({ error: "Erreur serveur" });
  }
};

module.exports = {
  add,
  login,
  getAll,
  updateUser,
  deleteUser,
};
