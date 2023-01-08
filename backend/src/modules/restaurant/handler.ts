import { Request, Response } from "express";
import {
  getAllService,
  getOneService,
  createOneService,
  updateOneService,
  deleteOneService,
} from "./service";
import { toObjectId, toMsg, msgType } from "../../common/utils";

const getAllHandler = async (req: Request, res: Response) => {
  const query = req.query;

  const restaurants = await getAllService(query);

  return res.status(200).json(restaurants);
};

const getOneHandler = async (req: Request, res: Response) => {
  const oid = toObjectId(req.params.id);

  const restaurant = await getOneService(oid);

  if (!restaurant) {
    return res
      .status(404)
      .json(toMsg(`restaurant ${oid} not found`, msgType.notfound));
  }

  return res.status(200).json(restaurant);
};

const createOneHandler = async (req: Request, res: Response) => {
  const restaurant = await createOneService(req.body);

  if (!restaurant) {
    return res
      .status(400)
      .json(toMsg(`create restaurant failed`, msgType.fail));
  }

  return res.status(201).json(restaurant);
};

const updateOneHandler = async (req: Request, res: Response) => {
  const oid = toObjectId(req.params.id);

  const restaurant = await getOneService(oid);

  if (!restaurant) {
    return res.status(404).json(toMsg(`${oid} not found`, msgType.notfound));
  }

  const updatedOne = await updateOneService(oid, req.body);

  if (!updatedOne) {
    return res.status(400).json(toMsg(`update ${oid} failed`, msgType.fail));
  }

  return res.status(202).json(updatedOne);
};

const deleteOneHandler = async (req: Request, res: Response) => {
  const oid = toObjectId(req.params.id);

  const restaurant = await getOneService(oid);

  if (!restaurant) {
    return res.status(404).json(toMsg(`${oid} not found`, msgType.notfound));
  }

  const deleteOne = await deleteOneService(oid);

  if (!deleteOne) {
    return res.status(400).json(toMsg(`delete ${oid} failed`, msgType.fail));
  }

  return res.status(202).json(toMsg(`${oid} has been delete`, msgType.success));
};

export {
  getAllHandler,
  getOneHandler,
  createOneHandler,
  updateOneHandler,
  deleteOneHandler,
};
