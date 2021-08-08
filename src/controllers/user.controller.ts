import {
	Controller,
	UseGuards,
	Post,
	Get,
	Param,
	ClassSerializerInterceptor,
	UseInterceptors,
	Put,
	Patch,
	Body,
	Delete,
	// UploadedFile,
	Request
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import {
	ApiBearerAuth,
	ApiResponse,
    ApiTags,
} from '@nestjs/swagger'
// import { FileInterceptor } from '@nestjs/platform-express'
// import * as jwt from 'jsonwebtoken'
import { ErrorResponseDto } from 'src/entities/users/dto/error-response.dto'
import { AuthService } from 'src/auth/auth.service'
import { UsersService } from 'src/users/user.service'
import { UserEntity } from 'src/entities/users/user.entity'
import { LoginResponseDto } from 'src/entities/users/dto/login-response.dto'
import { CreateUserDto } from 'src/entities/users/dto/create-user.dto'
import { UpdateUserDto } from 'src/entities/users/dto/update-user.dto'
import { ReplaceUserDto } from 'src/entities/users/dto/replace-user.dto'
import { OtpResponseDto } from 'src/entities/users/dto/otp-response.dto'

@ApiResponse({
	status: 401,
	description: 'Unauthorized.',
	type: ErrorResponseDto
})
@ApiResponse({ status: 403, description: 'Forbidden.', type: ErrorResponseDto })
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(
		private readonly authService: AuthService,
		private readonly userService: UsersService
	) {}

	@ApiResponse({
		status: 200,
		description: 'The found records',
		type: [UserEntity]
	})
	@ApiBearerAuth()
	@UseGuards(AuthGuard('jwt'))
	@Get()
	findAll() {
		return this.userService.findAll()
	}

	@ApiResponse({
		status: 200,
		description: 'The found record',
		type: LoginResponseDto
	})
	@Post()
	async insert(@Body() createUserDto: CreateUserDto) {
		const newUser = await this.userService.insert(createUserDto)

		const loginResponseDto = await this.authService.login(newUser)

		return loginResponseDto
	}

	@ApiResponse({
		status: 200,
		description: 'The found record',
		type: UserEntity
	})
	@ApiBearerAuth()
	@UseGuards(AuthGuard('jwt'))
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findOne(id)
	}

	@ApiBearerAuth()
	@UseGuards(AuthGuard('jwt'))
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.findOneAndUpdate(id, updateUserDto)
	}

	@ApiBearerAuth()
	@UseGuards(AuthGuard('jwt'))
	@Put(':id')
	replace(@Param('id') id: string, @Body() replaceUserDto: ReplaceUserDto) {
		return this.userService.findOneAndReplace(id, replaceUserDto)
	}

	@ApiResponse({
		status: 200,
		description: 'The found record is executed 👻',
		type: Boolean
	})
	@ApiBearerAuth()
	@UseGuards(AuthGuard('jwt'))
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.userService.deleteOne(id)
	}

	// @ApiResponse({
	// 	status: 200,
	// 	description: 'The found record is executed',
	// 	type: Boolean
	// })
	// @ApiBearerAuth()
	// @UseGuards(AuthGuard('jwt'))
	// @Post('avatar')
	// @ApiConsumes('multipart/form-data')
	// @UseInterceptors(FileInterceptor('avatar'))
	// updateAvatar(@Request() req, @UploadedFile() file) {
	// 	const { user } = req
	// 	const { _id } = user

	// 	return this.userService.updateAvatar(_id, file)
	// }

	// @ApiBearerAuth()
	// @UseGuards(AuthGuard('jwt'))
	// @ApiResponse({
	// 	status: 201,
	// 	description: 'The found record is executed',
	// 	type: OtpResponseDto
	// })
	// @Post('/otp/:phone')
	// otp1(@Request() req, @Param('phone') phone: string) {
	// 	const { user } = req
	// 	const { _id } = user

	// 	return this.userService.otp(_id, phone)
	// }

	// @ApiBearerAuth()
	// @UseGuards(AuthGuard('jwt'))
	// @ApiResponse({
	// 	status: 200,
	// 	description: 'The found record is executed',
	// 	type: LoginResponseDto
	// })
	// @Post('/verify/:otp')
	// async verify(
	// 	@Request() req,
	// 	@Param('otp') otp: string
	// ): Promise<LoginResponseDto | undefined> {
	// 	const { user } = req
	// 	const { _id } = user

	// 	const updateUser = await this.userService.verify(_id, otp)

	// 	const loginResponseDto = await this.authService.login(updateUser)

	// 	return loginResponseDto
	// }
}
