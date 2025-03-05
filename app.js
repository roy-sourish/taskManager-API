import express from "express";
import dotenv from "dotenv";
import tasks from "./routes/tasksRoutes.js";
import connectDB from "./config/db.js";
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

dotenv.config();
const app = express();
const port = 3000;

// middlewares
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);


const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`🚀 Server listening on port: ${port}`);
    });
  } catch (error) {
    console.error("❌ Server startup failed due to DB connection error", error);
    process.exit(1);
  }
};

start();

// Graceful Shutdown on Exit
process.on("SIGINT", async () => {
  console.log("🔄 Closing MongoDB Connection...");
  await mongoose.connection.close();
  process.exit(0);
});
