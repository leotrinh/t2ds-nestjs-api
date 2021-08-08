import { 
  NODE_ENV, 
  MONGO_URL, 
  MONGO_PORT, 
  MONGO_DB, 
  MONGO_PASSWORD, 
  MONGO_USERNAME
} from './environments';

const mongoConfig = {
  development: {
    url: MONGO_URL!,
    port: MONGO_PORT!,
    database: MONGO_DB!,
  },
  testing: {
    url: MONGO_URL!,
  },
  staging: {
    host: 'localhost',
    port: MONGO_PORT!,
    username: '',
    password: '',
    database: MONGO_DB!,
  },
  production: {
    host: 'localhost',
    port: MONGO_PORT,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    database: MONGO_DB,
  },
};



export default mongoConfig[NODE_ENV!];
