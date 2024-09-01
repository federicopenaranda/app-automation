import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { TipoCliente } from '../utils/tipo-cliente.type';

export class CreateClienteDto {

	@IsString()
	client_name!: string;

	@IsEmail()
	email!: string;

	@IsEnum(TipoCliente, { message: 'wrong type' })
	client_type: TipoCliente;

	@IsOptional()
	@IsString()
	address?: string;

}
