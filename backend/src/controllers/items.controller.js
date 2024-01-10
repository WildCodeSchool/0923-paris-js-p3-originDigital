// Import access to database tables
// const argon = require("argon2");
const itemsModel = require("../models/items.model");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const items = await itemsModel.readAll();
    console.info(items);
    // Respond with the items in JSON format
    res.json(items);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const item = await itemsModel.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// const readAll = async (req, _) => {
//   try {
//     // const [users] = await
//     console.info(req);
//   } catch (error) {
//     console.error(error);
//   }
// };

// The E of BREAD - Edit (Update) operation

// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const item = req.body;

  try {
    // Insert the item into the database
    const insertId = await itemsModel.create(item);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;
    // const [[user]] = await userModel.findByEmail(Email);
    // if (!user) {
    //   res.sendStatus(422)
    // } else if (await argon.verfy(user.Password, Password)) {
    //   const token = jwt.sign({ id: user.id_Users, admin: user.Admin }, process.env.APP_SECRET, { expiresIn: "30d" });
    //   res.cookie("auth-token", token, { expire: "30d", httpOnly: true })
    // } else {
    //   res.sendStatus(422);
    // }
    console.info(Email, Password);
  } catch (error) {
    next(error);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  login,
  // destroy,
};
