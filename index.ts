import { AppDefinition } from './types';

const app: AppDefinition = {
    appName: 'sampleapp',
    backendDependencies: [
        { package: '@nestjs/config', version: '^3.2.3', type: 'app' },
        { package: '@nestjs/passport', version: '^10.0.3', type: 'app' },
        { package: '@nestjs/typeorm', version: '^10.0.2', type: 'app' },
        { package: 'bcryptjs', version: '^2.4.3', type: 'app' },
        { package: 'class-transformer', version: '^0.5.1', type: 'app' },
        { package: 'class-validator', version: '^0.14.1', type: 'app' },
        { package: 'jsonwebtoken', version: '^9.0.2', type: 'app' },
        { package: 'passport', version: '^0.7.0', type: 'app' },
        { package: 'passport-jwt', version: '^4.0.1', type: 'app' },
        { package: 'passport-local', version: '^1.0.0', type: 'app' },
        { package: 'pg', version: '^8.12.0', type: 'app' },
        { package: 'typeorm', version: '^0.3.20', type: 'app' },
        { package: '@types/bcryptjs', version: '^2.4.6', type: 'dev' },
        { package: '@types/jsonwebtoken', version: '^9.0.6', type: 'dev' },
        { package: '@types/passport-jwt', version: '^4.0.1', type: 'dev' },
        { package: '@types/passport-local', version: '^1.0.38', type: 'dev' },
    ],
    frontendDependencies: [
    ],
    modules: [
        {
            name: 'usuarios',
            tables: [
                {
                    tableName: 'usuario',
                    columns: [
                        {
                            name: 'id',
                            type: 'integer',
                            required: true,
                            primaryKey: true,
                        },
                        {
                            name: 'username',
                            type: 'varchar',
                            length: 145,
                            required: true
                        },
                        {
                            name: 'email',
                            type: 'email',
                            length: 245,
                            required: false,
                            unique: true
                        },
                        {
                            name: 'height',
                            type: 'decimal',
                            precision: 5,
                            scale: 2,
                            required: false
                        },
                        {
                            name: 'address',
                            type: 'text',
                            required: false
                        },
                        {
                            name: 'age',
                            type: 'integer',
                            required: false
                        },
                        {
                            name: 'first_login_date',
                            type: 'date',
                            required: false
                        },
                        {
                            name: 'last_login_timestamp',
                            type: 'timestamp',
                            required: true
                        },
                        {
                            name: 'last_login_timestamp_tz',
                            type: 'timestamptz',
                            required: true
                        },
                        {
                            name: 'is_active',
                            type: 'boolean',
                            required: true
                        },
                        {
                            name: 'user_frontend_config',
                            type: 'json',
                            required: true
                        },
                        {
                            name: 'created_at',
                            type: 'create_date',
                            required: false,
                        },
                        {
                            name: 'updated_at',
                            type: 'update_date',
                            required: false,
                        }
                    ]
                }
            ]
        },
        {
            name: 'clientes',
            tables: [
                {
                    tableName: 'cliente',
                    columns: [
                        {
                            name: 'id',
                            type: 'integer',
                            required: true,
                            primaryKey: true,
                        },
                        {
                            name: 'client_name',
                            type: 'varchar',
                            required: true,
                            length: 255
                        },
                        {
                            name: 'client_type',
                            type: 'enum',
                            required: true,
                            set: ["local", "national", "international"]
                        },
                        {
                            name: 'email',
                            type: 'email',
                            required: true,
                            length: 245
                        },
                        {
                            name: 'address',
                            type: 'text',
                            required: false
                        },
                        {
                            name: 'created_at',
                            type: 'create_date',
                            required: false
                        },
                        {
                            name: 'updated_at',
                            type: 'update_date',
                            required: false
                        }
                    ]
                }
            ]
        }
    ]
}

