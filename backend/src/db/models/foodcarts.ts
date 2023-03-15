/** @module Models/FoodCarts */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Double,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { Reviews } from "./reviews";


/**
 *  Class representing food carts table
 */
@Entity({ name: "foodcarts" })
export class FoodCarts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  hours: string;

  @Column()
  about: string;

  @Column()
  image: string;

  @Column()
  category: string;

  @Column()
  rating: Double;

  // Reviews
  @OneToMany((type) => Reviews, (r: Reviews) => r.foodcart)
  reviews: Relation<Reviews[]>;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
