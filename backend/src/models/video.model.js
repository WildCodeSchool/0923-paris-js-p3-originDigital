const db = require("../../database/client");

const insert = (video) => {
  const { title, description, thumbnail } = video;

  return db.query(
    "INSERT INTO videos (title, description, URL_video, type_video, thumbnail, category_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      title,
      description,
      video.URL_video,
      video.type_video,
      thumbnail,
      video.category_id,
      video.user_id,
    ]
  );
};

const insertVideoTag = (videoId, tagId) => {
  return db.query("INSERT INTO add_tags (video_id, tag_id) VALUES (?, ?)", [
    videoId,
    tagId,
  ]);
};

const findById = (id) => {
  return db.query(
    `SELECT v.*, u.*, c.name, (SELECT SUM(count) FROM views WHERE video_id = v.video_id) AS view_count FROM videos v LEFT JOIN users u ON v.user_id = u.user_id LEFT JOIN likes l ON v.video_id = l.video_id LEFT JOIN views vw ON v.video_id = vw.video_id JOIN categories AS c ON v.category_id = c.category_id WHERE v.video_id = ? GROUP BY v.video_id, u.user_id`,
    [id]
  );
};
const updateViewCount = (idVideo, idUser, newCount) => {
  return db.query(
    `UPDATE views SET count = ? WHERE users_id = ? AND video_id = ?`,
    [newCount, idUser, idVideo]
  );
};

const findAll = () => {
  return db.query("SELECT * FROM videos");
};

const update = (id, title, description, thumbnail, category) => {
  return db.query(
    "UPDATE videos SET title = ?, description = ?, thumbnail = ?, category_id = ? WHERE video_id = ?",
    [title, description, thumbnail, category, id]
  );
};

const destroy = (id) => {
  return db.query("DELETE FROM videos WHERE video_id = ?", [id]);
};

const findCommentsInfoByVideo = (videoId) => {
  return db.query(
    `SELECT c.*, u.username, u.avatar
     FROM comments c
     JOIN users u ON c.user_id = u.user_id
     WHERE c.video_id = ?
     ORDER BY c.date_comment DESC`,
    [videoId]
  );
};

const findByVideoNameOrCatOrTag = (videoName, categoryName, tagName) => {
  return db.query(
    "SELECT DISTINCT v.*, u.username FROM videos v JOIN users u ON v.user_id = u.user_id LEFT JOIN categories c ON v.category_id = c.category_id LEFT JOIN add_tags at ON v.video_id = at.video_id LEFT JOIN tags t ON at.tag_id = t.tag_id WHERE v.title LIKE ? OR c.name LIKE ? OR t.name LIKE ?",
    [`%${videoName}%`, `%${categoryName}%`, `%${tagName}%`]
  );
};

module.exports = {
  insert,
  findById,
  findAll,
  insertVideoTag,
  update,
  destroy,
  updateViewCount,
  findCommentsInfoByVideo,
  findByVideoNameOrCatOrTag,
};
