import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TipoCliente } from '../utils/tipo-cliente.type';

@Entity('cliente')
export class Cliente {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column({ type: 'varchar', length: 255, nullable: false })
	client_name!: string;

	@Column({
		type: 'enum',
		enum: TipoCliente,
		default: TipoCliente.LOCAL
	})
	client_type: TipoCliente;

	@Column({ type: 'varchar', length: 245, nullable: false })
	email!: string;

	@Column({ type: 'text', nullable: true })
	address: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

}