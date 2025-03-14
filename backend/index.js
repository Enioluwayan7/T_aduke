import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectToDatabase } from "./config/mongodbConnection.js";
import ordersRoutes from "./routes/ordersRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000/", "http://localhost:3000"],
  })
); //to resolve port conflict

app.use(express.json()); //to access data from frontend

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is currently running" });
});

app.use("/api/v1/order", ordersRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoutes);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server is running on PORT: ${PORT}`);
});
