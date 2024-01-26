const router = require("express").Router();

const videoController = require("../controllers/video.controller");
const fileUpload = require("../middlewares/fileUpload");
const auth = require("../middlewares/auth");

router.post("/videos", auth.isAuth, fileUpload.any(), videoController.add);
router.get("/videos", videoController.getAll);
router.get("/videos/:id", videoController.getOne);
router.put("/videos/:id", videoController.edit);

module.exports = router;
