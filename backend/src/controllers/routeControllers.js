import Todo  from "../models/todo.models.js";

export const getAllTodos = async (req, res) => {
  try {
    const data = await Todo.find();
    console.log("Data fetched:", data);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching todos:", error);
    return res.status(500).json({message: "Internal server error"});
  }
}

export const createTodo = async (req, res) => {
  try {
    const {title, status} = req.body;
    const validStatuses = ['pending', 'in-progress', 'completed'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

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

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, status } = req.body;
    const validStatuses = ['pending', 'in-progress', 'completed'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }


    const updatedTodo = await Todo.findByIdAndUpdate(id, {title, status}, {new: true});
    if (!updatedTodo) {
      return res.status(404).json({message: "Todo not found"});
    }
    return res.send(updatedTodo)
  } catch (error) {
    console.error("Error updating todo:", error);
    return res.status(500).json({message: "Internal server error"});
  }
}

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleledTodo = await Todo.findByIdAndDelete(id);
    if (!deleledTodo) {
      return res.status(404).json({message: "Todo not found"});
    }
    return res.status(200).json({message: "Todo deleted successfully"});

  } catch (error) {
    console.error("Error deleting todo:", error); 
    return res.status(500).json({message: "Internal server error"});
  }
}