const FollowerModel = require("../models/follower.model");

const getFollowers = async (req, res) => {
  const { userId } = req.params;

  try {
    const [followers] = await FollowerModel.findFollowerById(userId);
    if (followers) res.status(200).json(followers);
    else res.sendStatus(404);
  } catch (error) {
    console.error("Erreur lors de la récupération des followers :", error);
    res
      .status(500)
      .json({ error: "Erreur serveur lors de la récupération des followers." });
  }
};

module.exports = { getFollowers };