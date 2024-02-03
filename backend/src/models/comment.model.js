const db = require("../../database/client");

const insertComment = (com) => {
  const { comment } = com;
  return db.query(
    "INSERT INTO comments (comment, user_id, video_id) VALUES (?,?,?)",
    [comment, com.userId, com.video_id]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM comments WHERE comment_id = ?", [id]);
};

module.exports = {
  insertComment,
  findById,
};
