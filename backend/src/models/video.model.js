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
  return db.query("SELECT * FROM videos WHERE video_id = ?", [id]);
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

module.exports = {
  insert,
  findById,
  findAll,
  insertVideoTag,
  update,
  destroy,
};
