import express from "express";
import { connectToDB } from "./config/mongoDB";
import userRouter from "./routes/userRoutes";
import cors from "cors";

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());

connectToDB();
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
