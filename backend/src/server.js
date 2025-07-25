import express from 'express';
import router from './routes/todoRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

app.use(express.json());

app.use("/api",router);

connectDB();

app.listen(5001, () => {
  console.log("App is listening on PORT 5001")
})



