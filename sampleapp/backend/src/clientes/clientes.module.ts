import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Cliente } from './entities/cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesController } from './clientes.controller';

@Module({
    imports: [
      TypeOrmModule.forFeature([
        Cliente
      ]),
    ],
    controllers: [ClientesController],
    providers: [ClientesService],
  })
export class ClientesModule {
}
