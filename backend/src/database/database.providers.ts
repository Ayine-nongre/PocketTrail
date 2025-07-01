import { DataSource } from "typeorm";
import { ConfigService } from '@nestjs/config'
import { Inject } from "@nestjs/common";

export const DatabaseProviders = [
    {
        provide: 'DATA_SOURCE',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService ) => {
            const dataSource = new DataSource(
                configService.get('ENVIRONMENT') == 'DEV' ? {
                type: 'sqlite',
                database: 'src/database/database.sqlite',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
                logging: true
            }: {
                type: 'postgres',
                host: configService.get('POSTGRES_HOST'),
                port: configService.get<number>('POSTGRES_PORT'),
                username: configService.get('POSTGRES_USER'),
                password: configService.get('POSTGRES_PASSWORD'),
                database: configService.get('POSTGRES_DB'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: false,
                logging: false,
            })

            return dataSource.initialize()
        }
    }
]