import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { comparePassword } from '../utils'
import { getMongoRepository } from 'typeorm'
import { UserEntity } from 'src/entities/users/user.entity'
import { LoginResponseDto } from 'src/entities/users/dto/login-response.dto'

@Injectable()
export class AuthService {
	constructor(private readonly jwtService: JwtService) {}

	async validateUser(email: string, password: string): Promise<any> {
		const user = await getMongoRepository(UserEntity).findOne({
			where: {
				email
			}
		})

		if (user && (await comparePassword(password, user.password))) {
			// tslint:disable-next-line: no-shadowed-variable
			const { password, ...result } = user

			return result
		}

		return null
	}

	async login(user: UserEntity): Promise<LoginResponseDto> {
		const { _id } = user
		const payload = { sub: _id }
		const expiresIn = 60 * 60 * 24 * 30

		return {
			accessToken: this.jwtService.sign(payload, {
				expiresIn
			}),
			user,
			expiresIn
		}
	}
}
