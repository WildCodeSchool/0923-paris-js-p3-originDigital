const router = require("express").Router();

const commentController = require("../controllers/comment.controller");
const { isAuth } = require("../middlewares/auth");

router.post("/comments", isAuth, commentController.postComment);
router.get("/comments/:id", commentController.getCommentById);

module.exports = router;
