/** @module Models/FoodCarts */
import TypeORM from "typeorm";
import { Reviews } from "./reviews";


/**
 *  Class representing food carts table
 */
@TypeORM.Entity({ name: "foodcarts" })
export class FoodCarts extends TypeORM.BaseEntity {
  @TypeORM.PrimaryGeneratedColumn()
  id: number;

  @TypeORM.Column()
  name: string;

  @TypeORM.Column()
  hours: string;

  @TypeORM.Column()
  about: string;

  @TypeORM.Column()
  image: string;

  @TypeORM.Column()
  category: string;

  @TypeORM.Column()
  rating: string;

  // Reviews
  @TypeORM.OneToMany((type) => Reviews, (r: Reviews) => r.foodcart)
  reviews: TypeORM.Relation<Reviews[]>;

  @TypeORM.CreateDateColumn()
  created_at: string;

  @TypeORM.UpdateDateColumn()
  updated_at: string;
}
