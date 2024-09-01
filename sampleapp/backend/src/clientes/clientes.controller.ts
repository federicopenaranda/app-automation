import { Body, Controller, Post, Get, Delete, Param, Patch } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';


@Controller('clientes')
export class ClientesController {
    constructor(
        private readonly clienteService: ClientesService,
    ) { }

    @Post()
    create(
        @Body() createClienteDto: CreateClienteDto
    ) {
        return this.clienteService.create(createClienteDto);
    }

    @Get()
    getAll() {
        return this.clienteService.findAll();
    }

    @Get(':id')
    getOne(
        @Param('id') id: string,
    ) {
        return this.clienteService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string, 
        @Body() updateClienteDto: UpdateClienteDto
    ) {
        return this.clienteService.update(+id, updateClienteDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.clienteService.delete(+id);
    }

}