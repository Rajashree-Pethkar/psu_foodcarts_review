/** @module Models/Reviews */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { FoodCarts } from "./foodcarts";
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
  foodcart: Relation<User>;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
