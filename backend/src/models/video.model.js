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
    "SELECT v.*, c.name, u.username FROM videos AS v JOIN categories AS c ON v.category_id = c.category_id JOIN users AS u ON u.user_id = v.user_id WHERE video_id = ?",
    [id]
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

const findByVideoNameOrCatOrTag = (videoName, categoryName, tagName) => {
  return db.query(
    "SELECT DISTINCT v.* FROM videos v LEFT JOIN categories c ON v.category_id = c.category_id LEFT JOIN add_tags at ON v.video_id = at.video_id LEFT JOIN tags t ON at.tag_id = t.tag_id WHERE v.title LIKE ? OR c.name LIKE ? OR t.name LIKE ?",
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
  findByVideoNameOrCatOrTag,
};
