import mongoose from "mongoose";
import { logger } from "../logger";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    logger.info("connected to database...");
  } catch (error) {
    logger.error(error, "failed to connect database");
    process.exit(1);
  }
}

async function disconnectDB() {
  await mongoose.connection.close();
  logger.info("Database disconnected");
  return;
}

export { connectDB, disconnectDB };
