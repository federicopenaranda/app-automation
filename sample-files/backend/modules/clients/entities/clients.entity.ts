import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clients')
export class Clients {
	@PrimaryGeneratedColumn() 
	id: number;

	@Column( { type: 'varchar', length: 255 , nullable: false } )
	client_name: string;

	@Column( { type: 'varchar', length: 245 , nullable: false } ) 
	email?: string;

	@Column( { type: 'text', nullable: true } )
	address?: string;

	@CreateDateColumn()
	created_at?: Date;

	@UpdateDateColumn()
	updated_at?: Date;

}