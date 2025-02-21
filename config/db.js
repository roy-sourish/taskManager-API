import mongoose from "mongoose";

const mongouri =
  "mongodb+srv://roysourish:sourish535@nodejs-api.aqv71.mongodb.net/tasks?retryWrites=true&w=majority&appName=nodejs-api";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `✅ MongoDB connection successful: ${mongoose.connection.host}`
    );
  } catch (error) {
    console.log("❌ MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
