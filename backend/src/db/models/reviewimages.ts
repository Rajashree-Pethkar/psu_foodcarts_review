/** @module Models/ReviewImages */
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
import { Reviews } from "./reviews";

/**
 *  Class representing review images table
 */
@Entity({ name: "reviewimages" })
export class ReviewImages extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @ManyToOne((type) => Reviews, (r: Reviews) => r.reviewimages, {
    cascade: true,
    onDelete: "CASCADE",
  })
  review: Relation<Reviews>;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
