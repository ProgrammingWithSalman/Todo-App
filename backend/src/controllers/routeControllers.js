import { Todo } from "../models/todo.models.js";


export const getAllTodos = async (req, res) => {
  res.send("Get all todos");
}
export const createTodo = async (req, res) => {

  try {
    const {title, status} = req.body;
    const newTodo = await Todo.create({
      title,
      status
    })
    return res.status(201).json({message: "Todo created successfully", todo: newTodo});
  } catch (error) {
    console.error("Error creating todo:", error);
    return res.status(500).json({message: "Internal server error"});
  }
}