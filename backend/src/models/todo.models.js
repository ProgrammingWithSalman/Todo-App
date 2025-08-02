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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // links to User collection
    required: true,
  },
})

const Todo = mongoose.model("todo", todoSchema)
export default Todo;