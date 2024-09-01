import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, Injectable } from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';


@Injectable()
export class ClientesService {

    constructor(
        @InjectRepository(Cliente)
        private readonly clientesRepository: Repository<Cliente>,
    ) { }

    async create(cliente: CreateClienteDto): Promise<Cliente> {
        const newRecord = this.clientesRepository.create(cliente);
        return await this.clientesRepository.save(newRecord);
    }

    async update(id: number, cliente: UpdateClienteDto): Promise<Cliente> {
        const recordDb = await this.findOne(id);
        if (!recordDb) {
            throw new Error('Cliente not found.');
        }

        const clienteData = this.clientesRepository.merge(
            recordDb,
            cliente,
        );

        return await this.clientesRepository.save(
            clienteData,
        );
    }

    async findAll(): Promise<Cliente[]> {
        return await this.clientesRepository.find();
    }

    async findOne(id: number): Promise<Cliente> {
        const clienteData = await this.clientesRepository.findOneBy({ id });
        if (!clienteData) {
            throw new HttpException('User Not Found', 404);
        }
        return clienteData;
    }

    async delete(id: number): Promise<Cliente> {
        const recordDb = await this.findOne(id);
        return await this.clientesRepository.remove(
            recordDb,
        );
    }

}