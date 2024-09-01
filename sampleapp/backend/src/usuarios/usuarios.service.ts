import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, Injectable } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';


@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuariosRepository: Repository<Usuario>,
    ) { }

    async create(usuario: CreateUsuarioDto): Promise<Usuario> {
        const newRecord = this.usuariosRepository.create(usuario);
        return await this.usuariosRepository.save(newRecord);
    }

    async update(id: number, usuario: UpdateUsuarioDto): Promise<Usuario> {
        const recordDb = await this.findOne(id);
        if (!recordDb) {
            throw new Error('Usuario not found.');
        }

        const usuarioData = this.usuariosRepository.merge(
            recordDb,
            usuario,
        );

        return await this.usuariosRepository.save(
            usuarioData,
        );
    }

    async findAll(): Promise<Usuario[]> {
        return await this.usuariosRepository.find();
    }

    async findOne(id: number): Promise<Usuario> {
        const usuarioData = await this.usuariosRepository.findOneBy({ id });
        if (!usuarioData) {
            throw new HttpException('User Not Found', 404);
        }
        return usuarioData;
    }

    async delete(id: number): Promise<Usuario> {
        const recordDb = await this.findOne(id);
        return await this.usuariosRepository.remove(
            recordDb,
        );
    }

}