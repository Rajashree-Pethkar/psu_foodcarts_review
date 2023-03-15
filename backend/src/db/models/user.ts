/** @module Models/User */
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	Relation,
	UpdateDateColumn
} from "typeorm";
import { ReviewReactions } from "./reviewreactions";
import { Reviews } from "./reviews";

/**
 *  Class representing user table
 */
@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    type: "varchar",
  })
  name: string;

  @Column("text")
  email: string;

  @Column()
  password: string;

  @Column()
  dob: Date;

  // Reviews
  @OneToMany((type) => Reviews, (r: Reviews) => r.user)
  reviews: Relation<Reviews[]>;

  // Reviews
  @OneToMany((type) => ReviewReactions, (r: ReviewReactions) => r.user)
  reviewreactions: Relation<ReviewReactions[]>;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
