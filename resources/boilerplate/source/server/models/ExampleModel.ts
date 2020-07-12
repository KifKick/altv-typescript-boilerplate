import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm'

@Entity()
export class ExampleModel {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'varchar', default: '' })
	username: string

	@UpdateDateColumn()
	updatedAt: Date

	@CreateDateColumn()
	createdAt: Date

}