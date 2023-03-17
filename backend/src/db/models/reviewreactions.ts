/** @module Models/ReviewReactions */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { Reviews } from "./reviews";
import { User } from "./user";

/**
 *  Class representing review rections table
 */
@Entity({ name: "reviewreactions" })
export class ReviewReactions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reaction: string;

  @ManyToOne((type) => Reviews, (r: Reviews) => r.reviewreactions, {
    cascade: true,
    onDelete: "CASCADE",
  })
  review: Relation<Reviews>;

  @ManyToOne((type) => User, (user: User) => user.reviewreactions, {
    cascade: true,
    onDelete: "CASCADE",
  })
  user: Relation<User>;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
