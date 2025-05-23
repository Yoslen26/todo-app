import express from 'express';
import routerTodos from './routes/todos.routes.js';
import { dbClient } from './db.js';
import * as bodyParser from "express";
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(routerTodos);

app.listen(3000, () => console.log(`Listening on port 3000.`));