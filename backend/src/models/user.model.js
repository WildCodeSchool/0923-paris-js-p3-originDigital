const db = require("../../database/client");

const insert = (user) => {
  const { mail, password, username } = user;

  return db.query(
    "INSERT INTO Users (mail, password, username) VALUES (?, ?, ?)",
    [mail, password, username]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM Users WHERE user_id = ?", [id]);
};

const findByEmail = (mail) => {
  return db.query("SELECT * FROM Users WHERE mail = ?", [mail]);
};

module.exports = {
  insert,
  findById,
  findByEmail,
};
