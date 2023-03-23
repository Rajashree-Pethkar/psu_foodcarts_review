/** @module Models/ReviewImages */
import TypeORM from "typeorm";
import { Reviews } from "./reviews";

/**
 *  Class representing review images table
 */
@TypeORM.Entity({ name: "reviewimages" })
export class ReviewImages extends TypeORM.BaseEntity {
  @TypeORM.PrimaryGeneratedColumn()
  id: number;

  @TypeORM.Column()
  image: string;

  @TypeORM.ManyToOne((type) => Reviews, (r: Reviews) => r.reviewimages, {
    cascade: true,
    onDelete: "CASCADE",
  })
  review: TypeORM.Relation<Reviews>;

  @TypeORM.CreateDateColumn()
  created_at: string;

  @TypeORM.UpdateDateColumn()
  updated_at: string;
}
