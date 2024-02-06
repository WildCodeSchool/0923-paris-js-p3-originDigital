const FollowedModel = require("../models/followed.model");

const getFollowed = async (req, res) => {
  //   const { userId } = req.params;
  try {
    const [followed] = await FollowedModel.findFollowedById(req.params.id);
    if (followed) res.status(200).json(followed);
    else res.sendStatus(404);
  } catch (error) {
    console.error("Erreur lors de la récupération des followers :", error);
    res
      .status(500)
      .json({ error: "Erreur serveur lors de la récupération des followers." });
  }
};

module.exports = { getFollowed };
