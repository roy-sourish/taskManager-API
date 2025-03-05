import express from "express";
import tasks from "./routes/tasksRoutes.js";
import connectDB from "./config/db.js";
import notFound from "./middleware/not-found.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;

// middlewares
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
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
