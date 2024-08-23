import { Controller, Post, Get, Delete, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) { }

    @Post()
    create() {
        return 'User created';
    }

    @Get()
    listAll() {
        return 'Users list';
    }

    @Get(':id')
    listOne(@Param('id') id: number) {
        return `User record for id: ${id}`;
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return `User deleted for record: ${id}`;
    }

    @Patch()
    update() {
        return 'User updated'
    }

}