import expres from "express";
import dotenv from "dotenv";
import { connectToMongoDb } from "./config/connection.js";
/* app initialization */
const app = expres();
dotenv.config();

/* mongoDB connection */
connectToMongoDb();

/* middlewares */
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.listen(1923, () => {
  console.log("Server is running on port 1923");
});
