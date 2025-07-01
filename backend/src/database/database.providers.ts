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
                url: configService.get('DATABASE_URL'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: false,
                logging: false,
            })

            return dataSource.initialize()
        }
    }
]