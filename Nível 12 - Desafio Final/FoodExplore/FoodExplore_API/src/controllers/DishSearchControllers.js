const knex = require("../database/knex");

class DishSearchController {
    /* search dish by name or ingredient */
    async dishSearch(request, response) {
        const { search } = request.query;

        const user_id = request.user.id;
        /* const user_id = 1; */

        let findByIngred;
        let findBydish;
        let dishWithIngredTwo = [];

        /* builds an array, if 2 items separated by commas are entered */
        const filterItem = search.split(',').map(item => item);
        
        /* query to display ingredient data */
        findByIngred = await knex("ingredients")
            .select([
                "dish.id",
                "dish.title",
                "dish.price",
                "dish.description",
                "dish.img_dish",
            ])
            .whereLike("ingredients.name", `%${search}%`)
            .whereIn("name", filterItem)
            .innerJoin("dish", "dish.id", "ingredients.dish_id")
            .orderBy("title");

        const allItens = await knex("ingredients").where({ user_id })
        const dishWithIngred = findByIngred.map(dis => {
            const itensWithDish = allItens.filter(itm => itm.dish_id === dis.id);

            return {
                ...dis,
                ingred: itensWithDish
            }
        })

        /* query to display dish data */
        findBydish = await knex("dish").whereLike("title", `%${search}%`).orderBy("title")
        const idDish = await findBydish[0]?.id;
        if(idDish){
            const allItensTwo = await knex("ingredients").where({ user_id })
            dishWithIngredTwo = findBydish.map(dish => {
                const itensWithDishTwo = allItensTwo.filter(itens => itens.dish_id === dish.id);

                return {
                    ...dish,
                    ingred: itensWithDishTwo
                }
            })
        }

        /* merge the results of all searches */
        const searchResult = await dishWithIngred.concat(dishWithIngredTwo)

        return response.json(searchResult);
    };
}

module.exports = DishSearchController;