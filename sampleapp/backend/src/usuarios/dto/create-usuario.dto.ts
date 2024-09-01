import { IsBoolean, IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUsuarioDto {
	@IsString()
	username: string;

	@IsOptional()
	@IsEmail()
	email?: string;
	
	@IsNumber()
	height: number;

	@IsOptional()
	@IsString()
	address: string;

	@IsOptional()
	@IsNumber()
	age: number;

	@IsString()
	first_login_date: Date;

	@IsOptional()
	@IsBoolean()
	is_active: boolean;

	@IsOptional()
	@IsString()
	user_frontend_config: string;

}
