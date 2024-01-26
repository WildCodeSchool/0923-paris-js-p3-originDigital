const db = require("../../database/client");

const insert = (category) => {
  const { name } = category;

  return db.query("INSERT INTO categories (name) VALUES (?)", [name]);
};

const findById = (id) => {
  return db.query("SELECT * FROM categories WHERE video_id = ?", [id]);
};

const findAll = () => {
  return db.query("SELECT * FROM categories");
};

module.exports = {
  insert,
  findById,
  findAll,
};
