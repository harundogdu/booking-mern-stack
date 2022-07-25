import express from "express";
import dotenv from "dotenv";
import { connectToMongoDb } from "./config/connection.js";
import hotelRoute from "./routes/hotels.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";

/* app initialization */
const app = express();
dotenv.config();

/* mongoDB connection */
connectToMongoDb();

/* middlewares */
app.use(express.json());

/* define routes */
app.use("/api/v1/hotels", hotelRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

/* error handling */
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal server error";
  const stack = err.stack || "";
  return res.status(status).json({
    success: false,
    status,
    message,
    stack,
  });
});

/* 404 Routes */
app.use((req, res) => {
  res.json({
    success: false,
    status: 404,
    message: "Route Not Found",
  });
});

/* app listen */
app.listen(1923, () => {
  console.log("Server is running on port 1923");
});
