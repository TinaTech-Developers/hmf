import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("⚠️ MongoDB already connected");
      return;
    }

    const uri = process.env.MONGODB_URI;
    if (!uri) {
      console.error("❌ Missing MONGODB_URI environment variable");
      return;
    }

    await mongoose.connect(uri);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
  }
};
