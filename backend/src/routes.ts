/** @module Routes */
import cors from "cors";
import {FastifyInstance, FastifyReply, FastifyRequest, RouteShorthandOptions} from "fastify";
import {User} from "./db/models/user";
import {readFileSync} from "node:fs";
import { FoodCarts } from "./db/models/foodcarts";
import { UploadFileToMinio } from "lib/minio";

/**
 * App plugin where we construct our routes
 * @param {FastifyInstance} app our main Fastify app instance
 */
export async function psu_foodcarts_routes(app: FastifyInstance): Promise<void> {
  // Middleware
  app.use(cors());

  /**
   * Route to fetch users.
   * @name get/users
   * @function
   */
  app.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
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
  const post_users_opts: RouteShorthandOptions = {
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
  app.post<{
    Body: {
      name: string;
      email: string;
      password: string;
      dob: Date;
    };
    Reply: IPostUsersResponse;
  }>("/users", post_users_opts, async (req, reply: FastifyReply) => {
    const { name, email, dob } = req.body;

    let { password } = req.body;


    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    user.dob = dob;

    await app.db.user.save(user);

    //manually JSON stringify due to fastify bug with validation
    // https://github.com/fastify/fastify/issues/4017
    await reply.send(JSON.stringify({ user }));
  });

  /**
   * Route serving food carts form.
   * @name get/foodcarts
   * @function
   */
  app.get(
    "/foodcarts",
    async (request: FastifyRequest, reply: FastifyReply) => {
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
    }
  );

  /**
   * Route allowing creation of a new user.
   * @name post/foodcarts
   * @function
   * @param {string} name - food carts name
   * @param {string} hours - hours
   * @param {string} about - about the food cart
   * @param {string} category - food category
   * @param {string} rating - food rating
   */
  app.post<{
    Body: {
      name: string;
      hours: string;
      about: string;
      category: string;
    };
    Reply: IPostUsersResponse;
  }>("/foodcarts", async (req: any, reply: FastifyReply) => {
    const { name, hours, about, category } = req.body;

    // Get file from request
    const data = await req.file();
    let upload = await UploadFileToMinio(data);

    const foodcart = new FoodCarts();
    foodcart.name = name;
    foodcart.hours = hours;
    foodcart.about = about;
    foodcart.category = category;

    await app.db.user.save(foodcart);

    //manually JSON stringify due to fastify bug with validation
    // https://github.com/fastify/fastify/issues/4017
    await reply.send(JSON.stringify({ foodcart }));
  });
}

/**
 * Response type for post/users
 */
export type IPostUsersResponse = {
	/**
	 * User created by request
	 */
	user: User,
	/**
	 * IP Address user used to create account
	 */
	ip_address: string
}