import { ConnectionOptions } from 'typeorm';

const ormConfig: ConnectionOptions = {
  type: 'mongodb',
  database: 'machinedb',
  synchronize: true,
  useNewUrlParser: true,
  logging: ['query', 'error'],
  entities: ['entities/**.*'],
  host: process.env.DB_ENDPOINT,
  port: 27017,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

export default ormConfig;
