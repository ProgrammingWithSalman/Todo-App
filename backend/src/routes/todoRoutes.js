import express from 'express';
import { createTodo, deleteTodo, getAllTodos, getTodo, updateTodo } from '../controllers/routeControllers.js';
import { protect } from '../middlewares/authMiddleware.js';


const router = express.Router();
router.get("/todos", protect, getAllTodos);
router.get("/todos/:id", protect, getTodo);
router.post("/todos", protect, createTodo);
router.put("/todos/:id", protect, updateTodo);
router.delete("/todos/:id", protect, deleteTodo)

export default router;