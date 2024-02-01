const express = require("express");

const router = express.Router();
const followedController = require("../controllers/follower.controller");

router.get("/follower/:userId", followedController.getFollowers);

module.exports = router;
