const router = require("express").Router();

const userController = require("../controllers/user.controller");
const auth = require("../middlewares/auth");

router.post("/users", auth.hashPassword, userController.add);
router.post("/users/login", userController.login);
router.get("/users", auth.isAuth, auth.isAdmin, userController.getAll);
router.get("/users/me", auth.isAuth, userController.getCurrentUser);
router.get("/users/:id", userController.getOne);
router.get("/users/logOut", auth.isAuth, userController.logOut);
router.get("/users/:id/videos", userController.getAllVideos);
router.put("/users/:id", userController.updateOne);
router.delete("/users/:id", userController.removeOne);

module.exports = router;
