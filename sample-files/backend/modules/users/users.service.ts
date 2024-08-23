import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { UserRoles } from './entities/user_roles.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
		private readonly usersRepository: Repository<Users>,
        @InjectRepository(UserRoles)
		private readonly userRolesRepository: Repository<UserRoles>,
    ) {}
    
}