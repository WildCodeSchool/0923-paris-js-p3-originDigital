const db = require("../../database/client");

const insert = (user) => {
  const { mail, password, username } = user;

  return db.query(
    "INSERT INTO users (mail, password, username) VALUES (?, ?, ?)",
    [mail, password, username]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM users WHERE user_id = ?", [id]);
};

const findByUsername = (username) => {
  return db.query("SELECT * FROM users WHERE username = ?", [username]);
};

const findAll = () => {
  return db.query("SELECT * FROM users");
};

const getVideosByUserId = (userId) => {
  return db.query("SELECT * FROM videos WHERE user_id = ?", [userId]);
};

const updateUser = async (userId, newData) => {
  const { mail, username, password } = newData;
  const result = await db.query(
    "UPDATE Users SET (mail, username, password) WHERE user_id = ?, ?, ?, ?",
    [mail, username, password, userId]
  );
  return result.rows[0];
};

const deleteUser = async (userId) => {
  try {
    await db.query("DELETE FROM Users WHERE user_id = ?", [userId]);
    return { success: true, message: "Utilisateur supprimé avec succès" };
  } catch (error) {
    console.error(
      "Erreur lors de la suppression de l'utilisateur :",
      error.message
    );
    throw error;
  }
};

module.exports = {
  insert,
  findById,
  findByUsername,
  getVideosByUserId,
  findAll,
  updateUser,
  deleteUser,
};
