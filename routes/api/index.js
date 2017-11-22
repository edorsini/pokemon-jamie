const router = require("express").Router();

const pokedexRoutes = require("./pokedex");

// define the routes to use

router.use("/pokedex", pokedexRoutes);

module.exports = router;
