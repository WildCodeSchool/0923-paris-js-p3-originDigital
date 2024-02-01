const router = require("express").Router();

const videoController = require("../controllers/video.controller");
const fileUpload = require("../middlewares/fileUpload");
const auth = require("../middlewares/auth");

router.post("/videos", auth.isAuth, fileUpload.any(), videoController.add);
router.get("/videos", videoController.getAll);
router.get("/videos/:id", videoController.getOne);
router.get("/videos/:id/info", videoController.getAllVideoInfos);
router.get("/videos/:id/comments", videoController.getAllCommentsbyVideo);
router.put("/videos/:id", videoController.edit);
router.delete("/videos/:id", videoController.removeOne);

module.exports = router;
