const router = require("express").Router();

const videoController = require("../controllers/video.controller");

router.post("/videos", videoController.add);

module.exports = router;
