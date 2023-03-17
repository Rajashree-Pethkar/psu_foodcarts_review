import { FoodCartSeeder } from "./foodcarts_seeder.js";
import { ReviewSeeder } from "./reviews_seeder.js";
import { UserSeed } from "./user_seeder.js";
/**
 * Options bag for configuring which seeds to run during `pnpm seed`
 */
const SeederOptions = {
    seeds: [
        UserSeed,
        FoodCartSeeder,
        ReviewSeeder
    ],
};
export default SeederOptions;
//# sourceMappingURL=seeder_options.js.map