import * as dotenv from 'dotenv'
dotenv.config()

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development'

// application
const PRIMARY_COLOR: string = process.env.PRIMARY_COLOR || '#87e8de'
const DOMAIN: string = process.env.DOMAIN || 'localhost'
const PORT: number = +process.env.PORT || 3000
const END_POINT: string = process.env.END_POINT || 'graphql'
const VOYAGER: string = process.env.VOYAGER || 'voyager'
const FE_URL: string = process.env.FE_URL || 'xxx'
const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10000
const GRAPHQL_DEPTH_LIMIT: number = +process.env.GRAPHQL_DEPTH_LIMIT || 3

// static
const STATIC: string = process.env.STATIC || 'static'

// ssl
const SSL: string = process.env.SSL || '.well-known/acme-challenge'

// mongodb
const MONGO_URL: string = `mongodb://aidictvn_mongodb:${process.env.MONGO_PORT}`
const MONGO_PORT: number = +process.env.MONGO_PORT || 27017
const MONGO_USERNAME: string = process.env.MONGO_USERNAME || 'aidictvn'
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || 'aidictvn2021'
const MONGO_DB: string = process.env.MONGO_DB

// postgresql
const POSTGRES_HOST: string = process.env.POSTGRES_HOST || 'aidictvn_postgres'
const POSTGRES_DB: string = process.env.POSTGRES_DB || 'aidictvn'
const POSTGRES_USER: string = process.env.POSTGRES_USER || 'aidictvn'
const POSTGRES_PASSWORD: string = process.env.POSTGRES_PASSWORD || 'aidictvn2021'
const POSTGRES_PORT: number = +process.env.POSTGRES_PORT || 5432

// jsonwebtoken
const ISSUER: string = process.env.ISSUER || 'http://chnirt.github.io'
const ACCESS_TOKEN: string = process.env.ACCESS_TOKEN || 'access-token'
const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || 'basic'
const REFRESH_TOKEN: string = process.env.REFRESH_TOKEN || 'refresh-token'
const REFRESH_TOKEN_SECRET: string =
	process.env.REFRESH_TOKEN_SECRET || 'refresh-token-key'
const EMAIL_TOKEN: string = process.env.EMAIL_TOKEN || 'email-token'
const EMAIL_TOKEN_SECRET: string =
	process.env.EMAIL_TOKEN_SECRET || 'email-token-key'
const RESETPASS_TOKEN: string = process.env.RESETPASS_TOKEN || 'resetpass-token'
const RESETPASS_TOKEN_SECRET: string =
	process.env.RESETPASS_TOKEN_SECRET || 'resetpass-token-key'

// bcrypt
const SALT: number = +process.env.SALT || 10

// nodemailer
const MAIL_USER: string = process.env.MAIL_USER || 'xxx'
const MAIL_PASS: string = process.env.MAIL_PASS || 'xxx'

// cloudinary
const CLOUD_NAME: string = process.env.CLOUD_NAME || 'xxx'
const API_KEY: string = process.env.API_KEY || 'xxx'
const API_SECRET: string = process.env.API_SECRET || 'xxx'

// speakeasy
const SPEAKEASY_SECRET = process.env.SPEAKEASY_SECRET || 'speakeasy-secret'
const SPEAKEASY_DIGITS = +process.env.SPEAKEASY_DIGITS || 6
const SPEAKEASY_STEP = +process.env.SPEAKEASY_STEP || 60

// pubsub
const NOTIFICATION_SUBSCRIPTION: string = 'newNotification'
const USER_SUBSCRIPTION: string = 'newUser'
const MESSAGES_SUBSCRIPTION: string = 'newMessages'

// passport
const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID || 'xxx'
const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET || 'xxx'
const GOOGLE_CALLBACK_URL: string =
	process.env.GOOGLE_CALLBACK_URL || 'auth/google/callback'

const FACEBOOK_APP_ID: string = process.env.FACEBOOK_APP_ID || 'xxx'
const FACEBOOK_APP_SECRET: string = process.env.FACEBOOK_APP_SECRET || 'xxx'
const FACEBOOK_CALLBACK_URL: string =
	process.env.FACEBOOK_CALLBACK_URL || 'auth/facebook/callback'

// google cloud
const GOOGLE_APPLICATION_CREDENTIALS: string =
	process.env.GOOGLE_APPLICATION_CREDENTIALS || 'xxx'

// stripe
const STRIPE_PUBLIC_KEY: string = process.env.STRIPE_PUBLIC_KEY || 'xxx'
const STRIPE_SECRET_KEY: string = process.env.STRIPE_SECRET_KEY || 'xxx'
const STRIPE_PLAN: string = process.env.STRIPE_PLAN || 'xxx'

// twilio
const TWILIO_ACCOUNT_SID: string = process.env.TWILIO_ACCOUNT_SID || 'xxx'
const TWILIO_AUTH_TOKEN: string = process.env.TWILIO_AUTH_TOKEN || 'xxx'

export {
	NODE_ENV,
	PRIMARY_COLOR,
	DOMAIN,
	PORT,
	END_POINT,
	VOYAGER,
	FE_URL,
	RATE_LIMIT_MAX,
	GRAPHQL_DEPTH_LIMIT,
	STATIC,
	SSL,
	MONGO_URL,
	MONGO_PORT,
	MONGO_DB,
	MONGO_USERNAME,
	MONGO_PASSWORD,
	ISSUER,
	ACCESS_TOKEN,
	ACCESS_TOKEN_SECRET,
	REFRESH_TOKEN,
	REFRESH_TOKEN_SECRET,
	RESETPASS_TOKEN,
	RESETPASS_TOKEN_SECRET,
	EMAIL_TOKEN,
	EMAIL_TOKEN_SECRET,
	SALT,
	MAIL_USER,
	MAIL_PASS,
	CLOUD_NAME,
	API_KEY,
	API_SECRET,
	SPEAKEASY_SECRET,
	SPEAKEASY_DIGITS,
	SPEAKEASY_STEP,
	USER_SUBSCRIPTION,
	NOTIFICATION_SUBSCRIPTION,
	MESSAGES_SUBSCRIPTION,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	GOOGLE_CALLBACK_URL,
	FACEBOOK_APP_ID,
	FACEBOOK_APP_SECRET,
	FACEBOOK_CALLBACK_URL,
	GOOGLE_APPLICATION_CREDENTIALS,
	STRIPE_PUBLIC_KEY,
	STRIPE_SECRET_KEY,
	STRIPE_PLAN,
	TWILIO_ACCOUNT_SID,
	TWILIO_AUTH_TOKEN,
	POSTGRES_DB,
	POSTGRES_USER,
	POSTGRES_PASSWORD,
	POSTGRES_PORT,
	POSTGRES_HOST
}
