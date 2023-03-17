/** @module Routes */
import cors from "cors";
/**
 * App plugin where we construct our routes
 * @param {FastifyInstance} app our main Fastify app instance
 */
export async function psu_foodcarts_routes(app) {
    // Middleware
    // TODO: Refactor this in favor of fastify-cors
    app.use(cors());
    /**
     * Route replying to /test path for test-testing
     * @name get/test
     * @function
     */
    app.get("/test", async (request, reply) => {
        reply.send("GET Test");
    });
    /**
     * Route serving login form.
     * @name get/users
     * @function
     */
    app.get("/users", async (request, reply) => {
        // This will return all users along with their associated profiles and ip histories via relations
        // https://typeorm.io/find-options
        let users = await app.db.user.find({
            // This allows you to define which fields appear/do not appear in your result.
            select: {
                id: true,
                name: true,
                email: true,
                dob: true,
                password: false,
                updated_at: true,
                created_at: false,
            }
        });
        reply.send(users);
    });
}
//# sourceMappingURL=routes.js.map