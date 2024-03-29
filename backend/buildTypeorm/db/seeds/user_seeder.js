/** @module Seeds/User */
import { User } from "../models/user.js";
import { Seeder } from "../../lib/seed_manager.js";
/**
 * UserSeeder class - Model class for interacting with "users" table
 */
export class UserSeeder extends Seeder {
    /**
     * Runs the User table's seed
     * @function
     * @param {FastifyInstance} app
     * @returns {Promise<void>}
     */
    async run(app) {
        app.log.info("Seeding Users...");
        // clear out whatever's already there
        // note we cannot use .clear() because postgres cascade is bugged in Typeorm
        // https://github.com/typeorm/typeorm/issues/1649
        await app.db.user.delete({});
        for (let i = 0; i < 10; i++) {
            let user = new User();
            user.name = "user" + i;
            user.email = "user" + i + "@email.com";
            user.dob = new Date();
            user.password = "test";
            await user.save();
            app.log.info("Seeded user " + i);
        }
    }
}
// generate default instance for convenience
export const UserSeed = new UserSeeder();
//# sourceMappingURL=user_seeder.js.map