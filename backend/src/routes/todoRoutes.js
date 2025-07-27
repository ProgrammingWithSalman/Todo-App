import express from 'express';
import { createTodo, deleteTodo, getAllTodos, updateTodo } from '../controllers/routeControllers.js';


const router = express.Router();
router.get("/todos", getAllTodos);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo)

export default router;