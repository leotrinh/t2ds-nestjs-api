import { MongodbTypeOrmServices, PostgreSQLTypeOrmServices } from '@config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'postgres',
			useClass: PostgreSQLTypeOrmServices
		}),
    TypeOrmModule.forRootAsync({
      name: 'mongodb',
			useClass: MongodbTypeOrmServices
		}),
    AuthModule,
		UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
