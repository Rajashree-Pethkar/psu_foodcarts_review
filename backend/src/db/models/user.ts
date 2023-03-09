/** @module Models/User */
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm";

/**
 *  Class representing user table
 */
@Entity({name: "users"})
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 100,
		type: "varchar"
	})
	name: string;

	@Column('text')
	email: string;

	@Column({
		default: 0
	})
	badwords!: number;

	@CreateDateColumn()
	created_at: string;

	@UpdateDateColumn()
	updated_at: string;
}
