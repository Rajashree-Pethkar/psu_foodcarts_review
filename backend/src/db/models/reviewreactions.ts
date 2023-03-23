/** @module Models/ReviewReactions */
import TypeORM from "typeorm";
import { Reviews } from "./reviews";
import { User } from "./user";

/**
 *  Class representing review rections table
 */
@TypeORM.Entity({ name: "reviewreactions" })
export class ReviewReactions extends TypeORM.BaseEntity {
  @TypeORM.PrimaryGeneratedColumn()
  id: number;

  @TypeORM.Column()
  reaction: string;

  @TypeORM.ManyToOne((type) => Reviews, (r: Reviews) => r.reviewreactions, {
    cascade: true,
    onDelete: "CASCADE",
  })
  review: TypeORM.Relation<Reviews>;

  @TypeORM.ManyToOne((type) => User, (user: User) => user.reviewreactions, {
    cascade: true,
    onDelete: "CASCADE",
  })
  user: TypeORM.Relation<User>;

  @TypeORM.CreateDateColumn()
  created_at: string;

  @TypeORM.UpdateDateColumn()
  updated_at: string;
}
