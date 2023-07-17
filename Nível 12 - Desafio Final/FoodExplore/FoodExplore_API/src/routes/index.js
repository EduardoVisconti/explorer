const { Router } = require("express");

const usersRouter = require("./users.routes");
const dishRouter = require("./dish.routes");
const ingredientsRouter = require("./ingredients.routes");
const authenticationRouter = require("./authentication.routes");
const dishSearch = require("./dishSearch.routes");
const dishClient = require("./dishClient.routes");

const routes = Router();

routes.use("/api/users", usersRouter);
routes.use("/api/authentication", authenticationRouter);
routes.use("/api/dish", dishRouter);
routes.use("/api/ingredients", ingredientsRouter);
routes.use("/api/search", dishSearch);
routes.use("/api/Client", dishClient);

module.exports = routes;