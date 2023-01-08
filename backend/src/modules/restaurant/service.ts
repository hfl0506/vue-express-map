import { Restaurants, RestaurantModel } from "./model";
import { Types } from "mongoose";

async function getAllService(query: any) {
  let limit = query?.limit ?? 0;

  return RestaurantModel.find().limit(limit);
}

async function getOneService(id: Types.ObjectId) {
  return RestaurantModel.findById(id);
}

async function createOneService(payload: Restaurants) {
  return RestaurantModel.create(payload);
}

async function updateOneService(id: Types.ObjectId, payload: any) {
  return RestaurantModel.findByIdAndUpdate(id, payload, { new: true });
}

async function deleteOneService(id: Types.ObjectId) {
  return RestaurantModel.findByIdAndDelete(id);
}

export {
  getAllService,
  getOneService,
  createOneService,
  updateOneService,
  deleteOneService,
};
