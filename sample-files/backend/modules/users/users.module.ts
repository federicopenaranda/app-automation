import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { UserRoles } from './entities/user_roles.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports: [
      TypeOrmModule.forFeature([
        Users,
        UserRoles
      ])
    ],
    controllers: [UsersController],
    providers: [UsersService],
  })
export class UsersModule {
}
