import { Types } from "mongoose";

export function toObjectId(str: string) {
  return new Types.ObjectId(str);
}
