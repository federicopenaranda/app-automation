import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export type UserRoleType = "admin" | "editor" | "ghost";

@Entity('user_roles')
export class UserRoles {
	@PrimaryGeneratedColumn() 
	id: number;

	@Column({
        type: "set",
        enum: ["admin", "editor", "ghost"],
        default: ["editor"]
    })
    role: UserRoleType[]

	@Column( { type: 'boolean', nullable: false } )
	is_active?: boolean;

	@Column( { type: 'timestamptz', nullable: false } )
	role_assigned?: number;

	@Column( { type: 'timez', nullable: false } )
	role_start_time?: number;

	@Column( { type: 'timez', nullable: false } )
	role_end_time?: number;

	@Column( { type: 'int', nullable: true } ) 
	fk_id_user: number;

}