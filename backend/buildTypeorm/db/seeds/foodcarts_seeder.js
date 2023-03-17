/** @module Seeds/FoodCartsSeeder */
import { Seeder } from "../../lib/seed_manager.js";
import { FoodCarts } from "../models/foodcarts.js";
/**
 * FoodCartsSeeder class - Model class for interacting with "food carts" table
 */
export class FoodCartsSeeder extends Seeder {
    /**
     * Runs the Food carts table's seed
     * @function
     * @param {FastifyInstance} app
     * @returns {Promise<void>}
     */
    async run(app) {
        app.log.info("Seeding Food carts...");
        // clear out whatever's already there
        // note we cannot use .clear() because postgres cascade is bugged in Typeorm
        // https://github.com/typeorm/typeorm/issues/1649
        await app.db.foodcarts.delete({});
        //const users = await User.find();
        for (let i = 0; i < 10; i++) {
            let fc = new FoodCarts();
            fc.name = "PSU food cart" + i;
            fc.about = "Serves mexican food";
            fc.category = "Mexican, Breakfast, Lunch";
            fc.hours = "11am - 9pm";
            fc.rating = "4.5";
            fc.image = "";
            await fc.save();
            app.log.info("Seeded food carts " + i);
        }
    }
}
// generate default instance for convenience
export const FoodCartSeeder = new FoodCartsSeeder();
//# sourceMappingURL=foodcarts_seeder.js.map