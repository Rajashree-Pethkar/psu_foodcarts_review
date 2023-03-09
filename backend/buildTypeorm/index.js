import "reflect-metadata";
import { buildApp, listen } from "./server.js";
import SeedManager from "./lib/seed_manager.js";
import SeederOptions from "./db/seeds/seeder_options.js";
import { getModeFromArgs, RunMode } from "./lib/helpers.js";
/**
 * Constructs Fastify instance
 * @param {boolean} useLogging whether to log the server or not
 */
const app = await buildApp(true);
try {
    switch (getModeFromArgs()) {
        case RunMode.LISTEN: {
            // Make our app start listening
            void await listen(app);
            break;
        }
        case RunMode.SEED: {
            // Run seed
            try {
                app.log.info("Starting seed");
                await SeedManager.seedAll(app, SeederOptions);
                app.log.info("Seeding done, cleaning up after ourselves...");
            }
            catch (err) {
                app.log.error("Error seeding database" + err);
            }
            break;
        }
    }
}
catch (err) {
    app.log.error("Uncaught Error!");
    app.log.error(err);
}
// boilerplate - psu_foodcarts here matches with vite.config.js::exportName
export const psu_foodcarts = app;
//# sourceMappingURL=index.js.map