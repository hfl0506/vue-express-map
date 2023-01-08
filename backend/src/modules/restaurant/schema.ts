import { object, string, number, TypeOf } from "zod";

export const RestaurantQuerySchema = object({
  query: object({
    limit: string().regex(/\d+/).transform(Number).optional(),
  }),
});

export const RestaurantParamsSchema = object({
  params: object({
    id: string(),
  }),
});

const AddressObject = object({
  building: string(),
  street: string(),
  zipcode: string().regex(/\d+/),
  _id: string(),
});

export const CreateRestaurantSchema = object({
  body: object({
    address: AddressObject,
    borough: string(),
    cuisine: string(),
    name: string(),
    restaurant_id: string().regex(/\d+/),
  }),
});

export const UpdateRestaurantSchema = object({
  body: object({
    address: AddressObject.optional(),
    borough: string().optional(),
    cuisine: string().optional(),
    name: string().optional(),
    restaurant_id: string().regex(/\d+/).optional(),
  }),
  params: object({
    id: string(),
  }),
});

export type GetRestaurantQuery = TypeOf<typeof RestaurantQuerySchema>;

export type CreateRestaurantBody = TypeOf<typeof CreateRestaurantSchema>;

export type UpdateRestaurantBody = TypeOf<typeof UpdateRestaurantSchema>;

export type RestaurantParams = TypeOf<typeof RestaurantParamsSchema>;
