const { Router } = require("express");

const DishSearchController = require("../controllers/DishSearchControllers");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const dishSearchRoutes = Router();
const dishSearchController = new DishSearchController();

dishSearchRoutes.use(ensureAuthenticated);

dishSearchRoutes.get("/", dishSearchController.dishSearch);

module.exports = dishSearchRoutes;