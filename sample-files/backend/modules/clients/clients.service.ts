import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clients } from './entities/clients.entity';
import { ClientPhones } from './entities/client_phones.entity';


@Injectable()
export class ClientsService {

    constructor(
        @InjectRepository(Clients)
		private readonly clientsRepository: Repository<Clients>,
        @InjectRepository(ClientPhones)
		private readonly clientPhonesRepository: Repository<ClientPhones>,
    ) {}
    
}