import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioTipo } from './entities/usuario_tipo.entity';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario,
      UsuarioTipo,
    ])
  ],
  exports: [UsuariosService],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
