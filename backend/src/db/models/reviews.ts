/** @module Models/Reviews */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { FoodCarts } from "./foodcarts";
import { ReviewImages } from "./reviewimages";
import { ReviewReactions } from "./reviewreactions";
import { User } from "./user";

/**
 *  Class representing reviews table
 */
@Entity({ name: "reviews" })
export class Reviews extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  rating: number;

  @ManyToOne((type) => User, (user: User) => user.reviews, {
    cascade: true,
    onDelete: "CASCADE",
  })
  user: Relation<User>;

  @ManyToOne((type) => FoodCarts, (fc: FoodCarts) => fc.reviews, {
    cascade: true,
    onDelete: "CASCADE",
  })
  foodcart: Relation<FoodCarts>;

  // Review Images
  @OneToMany((type) => ReviewImages, (r: ReviewImages) => r.review)
  reviewimages: Relation<ReviewImages[]>;

  // Review Reactions
  @OneToMany((type) => ReviewReactions, (r: ReviewReactions) => r.review)
  reviewreactions: Relation<ReviewReactions[]>;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
