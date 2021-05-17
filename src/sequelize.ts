import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';

const {username, password, database, host} = config.dev;

export const sequelize = new Sequelize({
  username,
  password,
  host,
  database,
  dialect: 'postgres',
  storage: ':memory'
});