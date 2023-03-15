/** @module Models/User */
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
import { User } from "./user";

/**
 *  Class representing user table
 */
@Entity({ name: "users" })
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

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
