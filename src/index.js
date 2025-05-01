import express from 'express';
import routerTodos from './routes/todos.routes.js';
import { dbClient } from './db.js';

const app = express();
app.use(express.json());
app.use(routerTodos);

app.listen(3000, () => console.log(`Listening on port 3000.`));