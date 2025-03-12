import express from "express";
import "dotenv/config";
import cors from "cors";

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

app.listen(PORT, async () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
