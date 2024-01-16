const db = require("../../database/client");

const create = (video) => {
  const {
    title,
    description,
    URLVideo,
    typeVideo,
    thumbnail,
    datePublication,
    validate,
    categoryId,
  } = video;
  return db.query(
    `INSERT INTO videos (title, description, URL_video, type_video, thumbnail, date_publication, validate, category_id) VALUES (?,?,?,?,?,?,?,?)`,
    [
      title,
      description,
      URLVideo,
      typeVideo,
      thumbnail,
      datePublication,
      validate,
      categoryId,
    ]
  );
};

const findById = (id) => {
  return db.query(`SELECT * FROM videos WHERE video_id= ?`, [id]);
};

module.exports = {
  create,
  findById,
};
