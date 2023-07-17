const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const DishControllersClient = require("../controllers/DishControllersClient");
const DishImgController = require("../controllers/DishImgController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const dishRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const dishControllersClient = new DishControllersClient();
const dishImgController = new DishImgController();

dishRoutes.use(ensureAuthenticated);

dishRoutes.get("/", ensureAuthenticated, dishControllersClient.dishForCategoryClient);

dishRoutes.patch("/:id", upload.single("img_dish"), dishImgController.create);

module.exports = dishRoutes;