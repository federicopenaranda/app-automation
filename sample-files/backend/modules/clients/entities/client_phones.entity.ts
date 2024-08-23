import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export type PhoneType = "office" | "cellphone" | "store";

@Entity('client_phones')
export class ClientPhones {
	@PrimaryGeneratedColumn() 
	id: number;

	@Column( { type: 'int', nullable: true } ) 
	fk_id_client: number;

	@Column( { type: 'varchar', length: 255 , nullable: false } )
	phone: string;

	@Column({
        type: "set",
        enum: ["office", "cellphone", "store"],
        default: ["office"]
    })
    phone_type: PhoneType[]

}