import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  status: {
  type: String,
  enum: ["pending", "in-progress", "completed"],
  default: "pending",
},
})

const Todo = mongoose.model("todo", todoSchema)
export default Todo;