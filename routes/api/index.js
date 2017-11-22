const router = require("express").Router();
const courseRoutes = require("./courses");
const bookRoutes = require("./books");
const pokedexRoutes = require("./pokedex");

// define the routes to use

router.use("/pokedex", pokedexRoutes);

module.exports = router;
