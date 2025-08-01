import express from 'express';
import router from './routes/todoRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors'
const app = express();

dotenv.config();

app.use(express.json());

app.use(cors())

app.use("/api",router);

connectDB();

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${process.env.PORT}`)
})



