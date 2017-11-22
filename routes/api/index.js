const router = require("express").Router();
const courseRoutes = require("./courses");
const bookRoutes = require("./books");
const pokedexRoutes = require("./pokedex");

// define the routes to use
router.use("/courses", courseRoutes);
router.use("/books", bookRoutes);
router.use("/pokedex", pokedexRoutes);

module.exports = router;
