import { Body, Controller, Post, Get, Delete, Param, Patch } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';


@Controller('usuarios')
export class UsuariosController {
    constructor(
        private readonly usuariosService: UsuariosService,
    ) { }

    @Post()
    create(
        @Body() createUsuarioDto: CreateUsuarioDto
    ) {
        return this.usuariosService.create(createUsuarioDto);
    }

    @Get()
    getAll() {
        return this.usuariosService.findAll();
    }

    @Get(':id')
    getOne(
        @Param('id') id: string,
    ) {
        return this.usuariosService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string, 
        @Body() updateUsuarioDto: UpdateUsuarioDto
    ) {
        return this.usuariosService.update(+id, updateUsuarioDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usuariosService.delete(+id);
    }

}