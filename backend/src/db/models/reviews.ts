/** @module Models/Reviews */
import TypeORM from "typeorm";
import { FoodCarts } from "./foodcarts";
import { ReviewImages } from "./reviewimages";
import { ReviewReactions } from "./reviewreactions";
import { User } from "./user";

/**
 *  Class representing reviews table
 */
@TypeORM.Entity({ name: "reviews" })
export class Reviews extends TypeORM.BaseEntity {
  @TypeORM.PrimaryGeneratedColumn()
  id: number;

  @TypeORM.Column()
  text: string;

  @TypeORM.Column()
  rating: number;

  @TypeORM.ManyToOne((type) => User, (user: User) => user.reviews, {
    cascade: true,
    onDelete: "CASCADE",
  })
  user: TypeORM.Relation<User>;

  @TypeORM.ManyToOne((type) => FoodCarts, (fc: FoodCarts) => fc.reviews, {
    cascade: true,
    onDelete: "CASCADE",
  })
  foodcart: TypeORM.Relation<FoodCarts>;

  // Review Images
  @TypeORM.OneToMany((type) => ReviewImages, (r: ReviewImages) => r.review)
  reviewimages: TypeORM.Relation<ReviewImages[]>;

  // Review Reactions
  @TypeORM.OneToMany(
    (type) => ReviewReactions,
    (r: ReviewReactions) => r.review
  )
  reviewreactions: TypeORM.Relation<ReviewReactions[]>;

  @TypeORM.CreateDateColumn()
  created_at: string;

  @TypeORM.UpdateDateColumn()
  updated_at: string;
}
