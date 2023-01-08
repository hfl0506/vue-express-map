import express from "express";
import restaurantRoutes from "./modules/restaurant/route";

const router = express.Router();

router.use("/restaurants", restaurantRoutes);

export default router;
