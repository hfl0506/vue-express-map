import { optional, object, string, TypeOf } from "zod";

const oidSchema = object({
  _id: string(),
});

const restaurantSchema = createRestaurantSchema.merge(oidSchema);

const AddressObject = object({
  building: string(),
  street: string(),
  coord: number().array()
  zipcode: string().regex(/\d+/),
  _id: string(),
});

const createRestaurantSchema = object({
  address: AddressObject,
  borough: string(),
  cuisine: string(),
  name: string(),
  restaurant_id: string().regex(/\d+/),
});

const updateRestaurantSchema = object({
  address: AddressObject.optional(),
  borough: string().optional(),
  cuisine: string().optional(),
  name: string().optional(),
  restaurant_id: string().regex(/\d+/).optional(),
});

type CreateRestaurantRequest = TypeOf<typeof createRestaurantSchema>;
type UpdateRestaurantRequest = TypeOf<typeof updateRestaurantSchema>;
type RestaurantResponse = TypeOf<typeof restaurantSchema>;

export {
  //schemas
  createRestaurantSchema,
  updateRestaurantSchema,
  restaurantSchema,
  //types
  CreateRestaurantRequest,
  UpdateRestaurantRequest,
  RestaurantResponse,
};
