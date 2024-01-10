// const isAuth = async (req, res, next) => {
//   try {
//     const token = req.cookies("auth-token");
//     const decoded = jwt.verify(token, process.env.APP_SECRET);
//     req.body.userID = decoded.id;
//     req.body.admin = decoded.admin;
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).json(error.message);
//   }
// };

const isAdmin = (req, res, next) => {
  if (req.body.admin) {
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = {
  // hashPassword,
  // isAuth,
  isAdmin,
};
