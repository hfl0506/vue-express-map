import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { connectDB, disconnectDB } from "./common/db";
import appRoutes from "./routes";
import { logger } from "./common/logger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: process.env.ORGIN_URL }));

app.use("/api", appRoutes);

app.get("/healthcheck", (req: Request, res: Response) => {
  res.send("health check is okay");
});

const server = app.listen(port, async () => {
  await connectDB();
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});

const signals = ["SIGTERM", "SIGINT"];

function gracefulShutdown(signal: string) {
  process.on(signal, async () => {
    server.close();

    await disconnectDB();

    process.exit(0);
  });
}

for (let signal of signals) {
  gracefulShutdown(signal);
}
