/** @module Routes */
import cors from "cors";
import { User } from "./db/models/user.js";
import { FoodCarts } from "./db/models/foodcarts.js";
import { Reviews } from "./db/models/reviews.js";
/**
 * App plugin where we construct our routes
 * @param {FastifyInstance} app our main Fastify app instance
 */
export async function psu_foodcarts_routes(app) {
    // Middleware
    app.use(cors());
    /**
     * Route to fetch users.
     * @name get/users
     * @function
     */
    app.get("/users", async (request, reply) => {
        let users = await app.db.user.find({
            select: {
                id: true,
                name: true,
                email: true,
                dob: true,
                password: false,
                updated_at: true,
                created_at: false,
            },
        });
        reply.send(users);
    });
    // Appease fastify gods
    const post_users_opts = {
        schema: {
            body: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    email: { type: "string" },
                },
            },
            response: {
                200: {
                    type: "object",
                    properties: {
                        user: { type: "object" },
                    },
                },
            },
        },
    };
    /**
     * Route allowing creation of a new user.
     * @name post/users
     * @function
     * @param {string} name - user's full name
     * @param {string} email - user's email address
     * @returns {IPostUsersResponse} user used to create account
     */
    app.post("/users", post_users_opts, async (req, reply) => {
        const { name, email, dob } = req.body;
        const foundUser = await User.findOneOrFail({
            where: {
                email: email,
            },
        });
        let user = new User();
        if (foundUser == null) {
            let { password } = req.body;
            user.name = name;
            user.email = email;
            user.password = password;
            user.dob = dob;
            await app.db.user.save(user);
        }
        else {
            user = foundUser;
        }
        //manually JSON stringify due to fastify bug with validation
        // https://github.com/fastify/fastify/issues/4017
        await reply.send(JSON.stringify({ user }));
    });
    /**
     * Route serving food carts form.
     * @name get/foodcarts
     * @function
     */
    app.get("/foodcarts", async (request, reply) => {
        let fc = await app.db.foodcarts.find({
            select: {
                id: true,
                name: true,
                about: true,
                category: true,
                hours: true,
                rating: true,
                updated_at: true,
                created_at: false,
            },
        });
        reply.send(fc);
    });
    /**
     * Route allowing creation of a food cart.
     * @name post/foodcarts
     * @function
     * @param {string} name - food carts name
     * @param {string} hours - hours
     * @param {string} about - about the food cart
     * @param {string} category - food category
     */
    app.post("/foodcarts", async (req, reply) => {
        const { name, hours, about, category } = req.body;
        const foodcart = new FoodCarts();
        foodcart.name = name;
        foodcart.hours = hours;
        foodcart.about = about;
        foodcart.category = category;
        foodcart.rating = "0";
        foodcart.image = "test";
        await app.db.foodcarts.save(foodcart);
        //manually JSON stringify due to fastify bug with validation
        // https://github.com/fastify/fastify/issues/4017
        await reply.send(JSON.stringify({ foodcart }));
    });
    /**
     * Route to get all reviews.
     * @name get/reviews
     * @function
     */
    app.get("/reviews", async (request, reply) => {
        let reviews = await app.db.reviews.find({
            select: {
                id: true,
                text: true,
                rating: true,
                updated_at: true,
                created_at: false,
            },
            relations: {
                foodcart: true,
            },
        });
        reply.send(reviews);
    });
    /**
     * Route allowing creation of a review.
     * @name post/reviews
     * @function
     * @param {string} text - review text
     * @param {string} user - add user ref
     * @param {string} foodcart - add food cart ref
     * @param {string} rating - restaurant rating
     */
    app.post("/reviews", async (req, reply) => {
        const { text, user, foodcart, rating } = req.body;
        const users = await User.find({
            where: {
                id: user,
            },
        });
        const fc = await FoodCarts.find({
            where: {
                id: foodcart,
            },
        });
        const existingReview = await Reviews.findOneOrFail({
            where: {
                user: user,
            },
        });
        let review = new Reviews();
        if (existingReview != null) {
            review = existingReview;
        }
        review.text = text;
        review.rating = rating;
        review.user = users[0];
        review.foodcart = fc[0];
        await app.db.reviews.save(review);
        //manually JSON stringify due to fastify bug with validation
        // https://github.com/fastify/fastify/issues/4017
        await reply.send(JSON.stringify({ review }));
    });
}
//# sourceMappingURL=routes.js.map