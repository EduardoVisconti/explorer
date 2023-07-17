const { Router } = require("express");
const IngredientsControllers = require("../controllers/ingredientsControllers");

const ingredientsRoutes = Router();
const ingredientsControllers = new IngredientsControllers();

ingredientsRoutes.get("/", ingredientsControllers.index);

module.exports = ingredientsRoutes;