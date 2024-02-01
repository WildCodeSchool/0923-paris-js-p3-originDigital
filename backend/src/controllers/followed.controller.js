const FollowedModel = require("../models/followed.model");

const getFolloweds = async (req, res) => {
  const { userId } = req.params;

  try {
    const [followeds] = await FollowedModel.findFollowedById(userId);
    if (followeds) res.status(200).json(followeds);
    else res.sendStatus(404);
  } catch (error) {
    console.error("Erreur lors de la récupération des followers :", error);
    res
      .status(500)
      .json({ error: "Erreur serveur lors de la récupération des followers." });
  }
};

module.exports = { getFolloweds };
