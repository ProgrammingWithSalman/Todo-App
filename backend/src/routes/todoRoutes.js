import express from 'express';
import { createTodo, getAllTodos } from '../controllers/routeControllers.js';


const router = express.Router();
router.get("/todos", getAllTodos);
router.post("/todos", createTodo)

export default router;