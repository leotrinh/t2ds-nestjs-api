import { 
  NODE_ENV, 
	POSTGRES_DB,
	POSTGRES_USER,
	POSTGRES_PASSWORD,
	POSTGRES_PORT,
  POSTGRES_HOST
} from './environments';

const postgresConfig = {
  development: {
    database: POSTGRES_DB!,
    username: POSTGRES_USER!,
    password: POSTGRES_PASSWORD!,
    port: POSTGRES_PORT!,
    host: POSTGRES_HOST!
  },
}

export default postgresConfig[NODE_ENV!];
