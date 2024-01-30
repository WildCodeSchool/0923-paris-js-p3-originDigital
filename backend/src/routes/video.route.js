const router = require("express").Router();

const videoController = require("../controllers/video.controller");
const fileUpload = require("../middlewares/fileUpload");
const auth = require("../middlewares/auth");

router.post("/videos", auth.isAuth, fileUpload.any(), videoController.add);
router.get("/videos", videoController.getAll);
router.get("/videos/most-viewed", videoController.getMostViewed);
router.get(
  "/videos/category/:categoryId",
  videoController.getVideosByCategoryController
);
router.get("/videos/:id", videoController.getOne);
router.put("/videos/:id", videoController.edit);
router.get(
  "category/:categoryId/videos",
  videoController.getVideosByCategoryController
);
module.exports = router;
