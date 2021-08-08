import { Entity, ObjectIdColumn, Column } from 'typeorm'
import { uuidv4 } from '../../utils'
import { Exclude } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

@Entity({
	name: 'users',
	orderBy: {
		createdAt: 'ASC'
	}
})
export class UserEntity {
	@ApiProperty({ description: 'The _id of the User' })
	@ObjectIdColumn()
	_id: string

	// basic

	@ApiProperty({ description: 'The name of the User' })
	@Column()
	name: string

	@ApiProperty({ description: 'The email of the User' })
	@Column()
	email: string

	@ApiProperty({ description: 'The password of the User' })
	@Exclude()
	@Column()
	password: string

	// @Column()
	// countryCode: string; // Vietname +84
	// @Column()
	// phone: string; // 0704498756
	// @Column()
	// verified: boolean; // false
	// @Column()
	// authyId: string; // null

	@ApiProperty({ description: 'The phone of the User' })
	@Column()
	phone: string

	@ApiProperty({ description: 'The verified of the User' })
	@Column()
	verified: boolean

	@ApiProperty({ description: 'The createdAt of the User' })
	@Column()
	createdAt: number
	@ApiProperty({ description: 'The updatedAt of the User' })
	@Column()
	updatedAt: number

	constructor(partial: Partial<UserEntity>) {
		if (partial) {
			Object.assign(this, partial)
			this._id = this._id || uuidv4()
			this.createdAt = this.createdAt || +new Date()
			this.updatedAt = +new Date()
		}
	}
}
