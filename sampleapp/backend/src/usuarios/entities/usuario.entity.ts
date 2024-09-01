import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
	@PrimaryGeneratedColumn() 
	id: number;

	@Column( { type: 'varchar', length: 145, nullable: false } )
	username: string;

	@Column( { type: 'varchar', length: 245, nullable: true } )
	email?: string;

	@Column( { type: 'decimal', precision: 5, scale: 2, nullable: true } )
	height?: number;

	@Column( { type: 'text', nullable: true } )
	address?: string;

	@Column( { type: 'integer', nullable: true } )
	age?: number;

	@Column( { type: 'date', nullable: true } )
	first_login_date?: Date;

	@Column( { type: 'boolean', nullable: false } )
	is_active?: boolean;

	@Column( { type: 'json', nullable: false } )
	user_frontend_config?: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
