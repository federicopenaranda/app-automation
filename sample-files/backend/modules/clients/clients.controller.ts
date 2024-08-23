import { Controller, Post, Get, Delete, Param, Patch } from '@nestjs/common';

@Controller('clients')
export class ClientsController {
    constructor(
        private readonly clientsService: ClientsService,
    ) { }

    @Post()
    create() {
        return 'Client created';
    }

    @Get()
    listAll() {
        return 'Clients list';
    }

    @Get(':id')
    listOne(@Param('id') id: number) {
        return `Client record for id: ${id}`;
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return `Client delete for record: ${id}`;
    }

    @Patch()
    update() {
        return 'Client updated'
    }

}