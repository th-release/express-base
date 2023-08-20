import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const databaseLoader = new DataSource({
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT) || 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_SCHEMA,
  entities: ["src/entities/*.js", "src/entities/*.ts"],
  logging: process.env.DATABASE_LOGGING === "true" ? true : false,
  synchronize: process.env.DATABASE_SYNCHRONIZE === "true" ? true : false,
})
