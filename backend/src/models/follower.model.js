const db = require("../../database/client");

const findFollowerById = (id) => {
  return db.query("SELECT * FROM subscribe WHERE follower_id = ?", [id]);
};

module.exports = { findFollowerById };
