const express = require("express");

const router = express.Router();
const followedController = require("../controllers/followed.controller");

router.get("/followed/:userId", followedController.getFolloweds);

module.exports = router;
