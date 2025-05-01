import {TODOS} from '../constantes/constantes.js';
import {Router} from 'express';
import {getTodos, getTodoById, createTodo, completeTodo, eliminarTodo} from '../controllers/todo.controller.js';

const routerTodos = Router();

routerTodos.get('/todos', getTodos);

routerTodos.get('/todos/:id', getTodoById);

routerTodos.post('/todos', createTodo);

routerTodos.post('/todos/complete/:id', completeTodo);

routerTodos.delete('/todos/:id', eliminarTodo);

export default routerTodos;