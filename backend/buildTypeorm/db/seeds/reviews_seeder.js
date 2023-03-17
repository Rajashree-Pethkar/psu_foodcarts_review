/** @module Seeds/ReviewSeeder */
import { User } from "../models/user.js";
import { Seeder } from "../../lib/seed_manager.js";
import { Reviews } from "../models/reviews.js";
import { FoodCarts } from "../models/foodcarts.js";
/**
 * ReviewSeeder class - Model class for interacting with "reviews" table
 */
export class ReviewsSeeder extends Seeder {
    /**
     * Runs the Review table's seed
     * @function
     * @param {FastifyInstance} app
     * @returns {Promise<void>}
     */
    async run(app) {
        app.log.info("Seeding Reviews...");
        // clear out whatever's already there
        // note we cannot use .clear() because postgres cascade is bugged in Typeorm
        // https://github.com/typeorm/typeorm/issues/1649
        await app.db.reviews.delete({});
        const users = await User.find();
        const fc = await FoodCarts.find();
        for (let i = 0; i < 10; i++) {
            let reviews = new Reviews();
            reviews.text = "I liked your food!";
            reviews.rating = 4;
            reviews.user = users[i];
            reviews.foodcart = fc[i];
            await reviews.save();
            app.log.info("Seeded reviews " + i);
        }
    }
}
// generate default instance for convenience
export const ReviewSeeder = new ReviewsSeeder();
//# sourceMappingURL=reviews_seeder.js.map