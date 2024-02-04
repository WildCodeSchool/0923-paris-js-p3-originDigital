const router = require("express").Router();

const followerController = require("../controllers/follower.controller");
const followedController = require("../controllers/followed.controller");
const userController = require("../controllers/user.controller");
const auth = require("../middlewares/auth");
const fileUpload = require("../middlewares/fileUpload");

router.post("/users", auth.hashPassword, userController.add);
router.post("/users/login", userController.login);
router.get("/users", auth.isAuth, auth.isAdmin, userController.getAll);
router.get(
  "/users/username",
  auth.isAuth,
  auth.isAdmin,
  userController.getUsername
);
router.get("/users/me", auth.isAuth, userController.getCurrentUser);
router.get("/users/logOut", auth.isAuth, userController.logOut);
router.get("/users/:id", userController.getOne);
router.get("/users/:id/videos", userController.getAllVideos);
router.put("/users/:id", fileUpload.single("avatar"), userController.updateOne);
router.get(
  "/users/:id/isFollowing",
  auth.isAuth,
  userController.checkFollowUser
);
router.get("/users/:id/followers", followerController.getFollowers);
router.get("/users/:id/followed", followedController.getFollowed);
router.post("/users/:id/follow", auth.isAuth, userController.followUser);
router.delete("/users/:id/unfollow", auth.isAuth, userController.unfollowUser);
router.delete("/users/:id", userController.removeOne);

module.exports = router;
