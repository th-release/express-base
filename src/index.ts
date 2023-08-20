import 'reflect-metadata';
import express from 'express';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import cors from 'cors';
import 'dotenv/config';
import { databaseLoader } from './utils/db-loader';
import App from './app';

databaseLoader
  .initialize()
  .then(() => {
    console.log("Database Load.")
  })
  .catch((err) => {
    console.error("Database Load Error: ", err)
    return process.exit(1);
  })

const app = express();

app.use(express.json());
console.log("Express Json Success");

app.use(express.urlencoded({ extended: true }));
console.log("Express urlencoded Success");

app.use(bodyParser.json({ type: 'application/*+json' }));
console.log("Express Body-Parser Success");

app.use(cookieParser());
console.log("Express Cookie-Parser Success");

app.use(cors())
console.log("Express Cors Open Success");

new App(app);