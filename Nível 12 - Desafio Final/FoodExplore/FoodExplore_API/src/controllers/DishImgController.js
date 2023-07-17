const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class DishImgController {
    /* create and store image route */
    async create(request, response){
        const { id } = request.params;
        const img = request.file.filename;

        const diskStorage = new DiskStorage();
        const getImg = await knex("dish").where({ id: id }).first();

        if(getImg.img_dish) {
            await diskStorage.deleteFile(getImg.img_dish);
        }

        const fileDisk = await diskStorage.saveFile(img);
        getImg.img_dish = fileDisk;

        const dish = await knex("dish").where({ id: id }).update({ img_dish: img });

        return response.json({ name: dish.img });
    };
}

module.exports = DishImgController;