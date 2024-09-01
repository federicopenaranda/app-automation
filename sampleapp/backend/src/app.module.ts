import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClientesModule } from './clientes/clientes.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from '../config/environments';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    UsuariosModule,
    ClientesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'sampleapp',
      username: 'postgres',
      entities: [__dirname + './**/**/*entity{.ts,.js}.ts'],
      autoLoadEntities: true,
      database: 'sampleapp',
      synchronize: true,
      logging: false,
    }),
    ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: './env/' + environments[process.env.NODE_ENV] || './env/development.env',
		}),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
