/** @module Models/User */
import TypeORM from "typeorm";
import { ReviewReactions } from "./reviewreactions";
import { Reviews } from "./reviews";

/**
 *  Class representing user table
 */
@TypeORM.Entity({ name: "users" })
export class User extends TypeORM.BaseEntity {
  @TypeORM.PrimaryGeneratedColumn()
  id: number;

  @TypeORM.Column({
    length: 100,
    type: "varchar",
  })
  name: string;

  @TypeORM.Column("text")
  email: string;

  @TypeORM.Column()
  password: string;

  @TypeORM.Column()
  dob: Date;

  // Reviews
  @TypeORM.OneToMany((type) => Reviews, (r: Reviews) => r.user)
  reviews: TypeORM.Relation<Reviews[]>;

  // Reviews
  @TypeORM.OneToMany((type) => ReviewReactions, (r: ReviewReactions) => r.user)
  reviewreactions: TypeORM.Relation<ReviewReactions[]>;

  @TypeORM.CreateDateColumn()
  created_at: string;

  @TypeORM.UpdateDateColumn()
  updated_at: string;
}
