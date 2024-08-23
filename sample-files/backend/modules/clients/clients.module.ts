import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from './entities/clients.entity';
import { ClientPhones } from './entities/client_phones.entity';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';

@Module({
    imports: [
      TypeOrmModule.forFeature([
        Clients,
        ClientPhones
      ])
    ],
    controllers: [ClientsController],
    providers: [ClientsService],
  })
export class ClientsModule {
}
