import express from 'express';
import { createTodo, deleteTodo, getAllTodos, getTodo, updateTodo } from '../controllers/routeControllers.js';


const router = express.Router();
router.get("/todos", getAllTodos);
router.get("/todos/:id", getTodo);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo)

export default router;