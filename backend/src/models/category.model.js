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

const findByCategory = (categoryId) => {
  return db.query("SELECT * FROM videos WHERE category_id = ?", [categoryId]);
};

module.exports = {
  insert,
  findById,
  findAll,
  findByCategory,
};
