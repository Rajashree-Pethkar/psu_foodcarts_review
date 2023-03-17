/** @module SeedManager */
import { Seeder } from "lib/seed_manager";
import { FoodCartSeeder } from "./foodcarts_seeder";
import { ReviewSeeder } from "./reviews_seeder";
import {UserSeed} from "./user_seeder";

export type SeederOptionsType = {
	seeds: Array<Seeder>;
}

/**
 * Options bag for configuring which seeds to run during `pnpm seed`
 */
const SeederOptions: any = {
  seeds: [
	UserSeed, 
	FoodCartSeeder,
	ReviewSeeder],
};

export default SeederOptions;
