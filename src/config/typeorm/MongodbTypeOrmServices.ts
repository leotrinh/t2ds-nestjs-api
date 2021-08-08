import { NODE_ENV } from '@environments';
import { Injectable, Logger } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getMetadataArgsStorage, createConnection } from 'typeorm';

import mongo from '../../mongo.orm';

@Injectable()
export class MongodbTypeOrmServices implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const options = {
      ...mongo,
      type: 'mongodb',
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
      // migrations: ['src/modules/**/migration/*.ts'],
      // subscribers: ['src/modules/**/subscriber/*.ts'],
      // cli: {
      // 	entitiesDir: 'src/modules/**/entity',
      // 	migrationsDir: 'src/modules/**/migration',
      // 	subscribersDir: 'src/modules/**/subscriber'
      // },
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepConnectionAlive: true,
      logging: true,
    };
    await createConnection(options)
      .then(data => {
        Logger.log(`☁️  MongoDB connected`, 'TypeORM', false);
      })
      .catch(err => {
        Logger.error(mongo)
        Logger.error(NODE_ENV)
        Logger.error(`❌  MongoDB connect error ${err}`, '', 'TypeORM', false);
      });

    return options;
  }
}