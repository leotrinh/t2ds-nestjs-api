import { NestFactory } from '@nestjs/core'
import { Logger, InternalServerErrorException } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as helmet from 'helmet'
import * as rateLimit from 'express-rate-limit'
import { AppModule } from './app.module'

import {
	ValidationPipe,
	LoggerMiddleware,
	TimeoutInterceptor,
	LoggingInterceptor,
	HttpExceptionFilter
} from './common'
import { MyLogger } from './config'

import { NODE_ENV, DOMAIN, PORT } from './environments'

declare const module: any

async function bootstrap() {
	try {
		// const httpsOptions = {
		// 	key: fs.readFileSync('ssl/private.key'),
		// 	cert: fs.readFileSync('ssl/certificate.crt'),
		// 	ca: fs.readFileSync('ssl/ca_bundle.crt'),
		// }

		const app = await NestFactory.create(AppModule, {
			// httpsOptions,
			logger: new MyLogger(),
			cors: true
		})

		app.use(helmet())

		app.use(
			rateLimit({
				windowMs: 15 * 60 * 1000, // 15 minutes
				max: 10000 // limit each IP to 10000 requests per windowMs
			})
		)

		// // adapter for e2e testing
		const httpAdapter = app.getHttpAdapter()

		// loggerMiddleware
		// tslint:disable-next-line:no-unused-expression
		NODE_ENV !== 'testing' && app.use(LoggerMiddleware)

		// interceptors
		app.useGlobalInterceptors(new LoggingInterceptor())
		app.useGlobalInterceptors(new TimeoutInterceptor())
		app.useGlobalFilters(new HttpExceptionFilter())

		// global nest setup
		app.useGlobalPipes(new ValidationPipe())

		// Starts listening to shutdown hooks
		app.enableShutdownHooks()

		const options = new DocumentBuilder()
			.setTitle('AI Dictionary in Vietnamese')
			.setVersion('3.0.0')
			.setBasePath('/v1')
			.setDescription('built NestJS, TypeORM, MongoDB')
			.setExternalDoc('For more information', 'http://swagger.io')
			.addBearerAuth()
			.build()

		const document = SwaggerModule.createDocument(app, options)
		SwaggerModule.setup('api/docs', app, document)

		app.setGlobalPrefix('/api')

		const server = await app.listen(PORT!)

		// hot module replacement
		if (module.hot) {
			module.hot.accept()
			module.hot.dispose(() => app.close())
		}

		NODE_ENV !== 'production'
			? Logger.log(
					`🚀  Server ready at https://${DOMAIN!}:${PORT!}`,
					'Bootstrap'
			  )
			: Logger.log(
					`🚀  Server is listening on port ${PORT!}`,
					'Bootstrap'
			  )
	} catch (error) {
		// logger.error(error)
		Logger.error(`❌  Error starting server, ${error}`, '', 'Bootstrap', false)
		process.exit()
		throw new InternalServerErrorException(error)
	}
}
bootstrap().catch(e => {
	throw e
})
