const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import routes here
const itemRouter = require("./routes/items.route");

// Apply routes
router.use(itemRouter);

/* ************************************************************************* */

module.exports = router;
