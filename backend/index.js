import express from "express";

const PORT = 5000;
const app = express();

app.listen(PORT, async () => {
  console.log(`Server running on PORT: ${PORT}`);
});
