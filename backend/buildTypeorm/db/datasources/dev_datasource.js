// We need dotenv here because our datasources are processed from CLI in addition to vite
import dotenv from "dotenv";
import { DataSource } from 'typeorm';
// Similar reasoning as above, we need to add the file extensions to this file's imports for CLI usage
import { User } from "../models/user.js";
import { users1678343630301 } from "../migrations/1678343630301-users.js";
import { FoodCarts } from "../models/foodcarts.js";
import { ReviewImages } from "../models/reviewimages.js";
import { ReviewReactions } from "../models/reviewreactions.js";
import { Reviews } from "../models/reviews.js";
import { tables1678921168223 } from "../migrations/1678921168223-tables.js";
dotenv.config();
// @ts-ignore 
const env = process.env;
export const AppDataSource = new DataSource({
    type: "postgres",
    host: env.VITE_DB_HOST,
    port: Number(env.VITE_DB_PORT),
    username: env.VITE_DB_USER,
    password: env.VITE_DB_PASS,
    database: env.VITE_DB_NAME,
    // entities are used to tell TypeORM which tables to create in the database
    entities: [
        User,
        FoodCarts,
        ReviewImages,
        ReviewReactions,
        Reviews
    ],
    migrations: [
        users1678343630301,
        tables1678921168223
    ],
    // DANGER DANGER our convenience will nuke production data!
    synchronize: false
});
//# sourceMappingURL=dev_datasource.js.map