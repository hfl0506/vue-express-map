import express from "express";
import {
  getAllHandler,
  getOneHandler,
  createOneHandler,
  updateOneHandler,
  deleteOneHandler,
} from "./handler";
import { validate } from "../../common/utils";
import {
  RestaurantQuerySchema,
  RestaurantParamsSchema,
  CreateRestaurantSchema,
  UpdateRestaurantSchema,
} from "./schema";

const router = express.Router();

router.get("/", validate(RestaurantQuerySchema), getAllHandler);

router.get("/:id", validate(RestaurantParamsSchema), getOneHandler);

router.post("/", validate(CreateRestaurantSchema), createOneHandler);

router.put("/:id", validate(UpdateRestaurantSchema), updateOneHandler);

router.delete("/:id", validate(RestaurantParamsSchema), deleteOneHandler);

export default router;
