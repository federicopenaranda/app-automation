import { AppDefinition } from './types';

const app: AppDefinition = {
    appName: 'MercadoLibre',
    backendDependencies: [
        { package: 'class-transformer', version: '^0.5.1', type: 'app' },
        { package: 'class-validator', version: '^0.14.0', type: 'app' },
        { package: 'bcrypt', version: '^5.1.1', type: 'app' },
    ],
    frontendDependencies: [
        { package: '@angular/cdk', version: '^0.5.1', type: 'dev' },
        { package: '@angular/material', version: '^16.2.4', type: 'app' },
        { package: 'luxon', version: '^3.4.3', type: 'app' },
    ],
    modules: [
        {
            name: 'users',
            tables: [
                {
                    tableName: 'users',
                    columns: [
                        {
                            name: 'id',
                            type: 'integer',
                            required: true,
                            primaryKey: true,
                        },
                        {
                            name: 'uuid',
                            type: 'uuid',
                            required: true,
                            unique: true,
                        },
                        {
                            name: 'username',
                            type: 'varchar',
                            length: 145,
                            required: true
                        },
                        {
                            name: 'email',
                            type: 'varchar',
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
                            type: 'timestamp',
                            required: false,
                        },
                        {
                            name: 'updated_at',
                            type: 'timestamp',
                            required: false,
                        }
                    ]
                },
                {
                    tableName: 'user_roles',
                    columns: [
                        {
                            name: 'id',
                            type: 'integer',
                            required: true,
                            primaryKey: true,
                        },
                        {
                            name: 'role',
                            type: 'set',
                            set: ['admin', 'editor', 'ghost'],
                            required: true,
                            default: 'editor'
                        },
                        {
                            name: 'is_active',
                            type: 'boolean',
                            required: true
                        },
                        {
                            name: 'role_assigned',
                            type: 'timestamptz',
                            required: true
                        },
                        {
                            name: 'role_start_time',
                            type: 'timetz',
                            required: true
                        },
                        {
                            name: 'role_end_time',
                            type: 'timetz',
                            required: true
                        },
                        {
                            name: 'fk_id_user',
                            type: 'integer',
                            required: true,
                            foreignKey: {
                                table: 'users',
                                column: 'id'
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'clients',
            tables: [
                {
                    tableName: 'clients',
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
                            name: 'email',
                            type: 'varchar',
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
                            type: 'timestamptz',
                            required: false
                        },
                        {
                            name: 'updated_at',
                            type: 'timestamptz',
                            required: false
                        }
                    ]
                },
                {
                    tableName: 'client_phones',
                    columns: [
                        {
                            name: 'id',
                            type: 'integer',
                            required: true,
                            primaryKey: true,
                        },
                        {
                            name: 'fk_id_client',
                            type: 'integer',
                            required: true,
                            foreignKey: {
                                table: 'clients',
                                column: 'id'
                            }
                        },
                        {
                            name: 'phone',
                            type: 'varchar',
                            required: true,
                            length: 255
                        },
                        {
                            name: 'phone_type',
                            type: 'set',
                            required: true,
                            set: ["office", "cellphone", "store"],
                            default: 'office'
                        }
                    ]
                }
            ]
        }
    ]
}