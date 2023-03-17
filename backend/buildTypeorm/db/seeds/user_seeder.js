/** @module Seeds/User */
import { User } from "../models/user.js";
import { Seeder } from "../../lib/seed_manager.js";
import { hashSync } from "bcrypt";
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
            let password = "test";
            // if we're in dev mode and pw isn't already bcrypt encrypted, do so now for convenience
            if (import.meta.env.DEV) {
                if (!password.startsWith("$2a$")) {
                    password = hashSync(password, 2);
                }
            }
            user.password = password;
            await user.save();
            app.log.info("Seeded user " + i);
        }
    }
}
// generate default instance for convenience
export const UserSeed = new UserSeeder();
//# sourceMappingURL=user_seeder.js.map