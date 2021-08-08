import { NODE_ENV } from '@environments';
import { Injectable, Logger } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getMetadataArgsStorage, createConnection } from 'typeorm';

import postgres from '../../postgres.orm';

@Injectable()
export class PostgreSQLTypeOrmServices implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const options = {
      ...postgres,
      type: 'postgres',
      // migrations: ['src/modules/**/migration/*.ts'],
      // subscribers: ['src/modules/**/subscriber/*.ts'],
      // cli: {
      // 	entitiesDir: 'src/modules/**/entity',
      // 	migrationsDir: 'src/modules/**/migration',
      // 	subscribersDir: 'src/modules/**/subscriber'
      // },
      synchronize: true,
      keepConnectionAlive: true,
      logging: true,
      schema: 'public',
      connectTimeoutMS: 30000
    };
    await createConnection(options)
      .then(data => {
        Logger.log(`☁️  Postgres connected`, 'TypeORM', false);
      })
      .catch(err => {
        Logger.error(postgres)
        Logger.error(NODE_ENV)
        Logger.error(`❌  Postgres connect error ${err}`, '', 'TypeORM', false);
      });

    return options;
  }
}