import { Module } from '@nestjs/common'
import { AuthModule } from 'src/auth/auth.module';
import { UsersController } from 'src/controllers/user.controller';
import { UsersService } from './user.service';

@Module({
	imports: [AuthModule],
	controllers: [UsersController],
	providers: [UsersService],
	exports: [UsersService]
})
export class UsersModule {}
