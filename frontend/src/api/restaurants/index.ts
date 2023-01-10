import httpApi from "../index";
import { RestaurantResponse, UpdateRestaurantRequest } from "./schema";

const getRestaurants = async (query?: string) => {
  const params = {};

  if (query) {
    params.limit = query;
  }

  const resp = await httpApi.get<RestaurantResponse[]>("/api/restaurants", {
    params: params,
  });

  return resp.data;
};

const getRestaurant = async (id: string) => {
  const resp = await httpApi.get<RestaurantResponse>(`/api/restaurants/${id}`);
  return resp.data;
};

const createRestaurant = async (payload: CreateRestaurantRequest) => {
  const resp = await httpApi.post<RestaurantResponse>(
    "/api/restaurants",
    payload
  );
  return resp.data;
};

const updateRestaurant = async (
  id: string,
  payload: UpdateRestaurantRequest
) => {
  const resp = await httpApi.put<RestaurantResponse>(
    `/api/restaurants/${id}`,
    payload
  );
  return resp.data;
};

const deleteRestaurant = async (id: string) => {
  const resp = await httpApi.delete(`/api/restaurants/${id}`);
  return resp.data;
};

export {
  getRestaurant,
  getRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
