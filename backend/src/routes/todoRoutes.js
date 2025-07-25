import express from 'express';
import { createTodo, getAllTodos, updateTodo } from '../controllers/routeControllers.js';


const router = express.Router();
router.get("/todos", getAllTodos);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);

export default router;