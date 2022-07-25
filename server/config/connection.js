import mongoose from "mongoose";

export const connectToMongoDb = async function connectToDb() {
  try {
    await mongoose
      .connect(
        `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.uxbfc.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
      )
      .then(() => {
        console.log("Connected to database");
      })
      .catch((err) => {
        console.log("Error connecting to database: ", err);
      });
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};
