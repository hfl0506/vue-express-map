import { getModelForClass, prop } from "@typegoose/typegoose";
import mongoose from "mongoose";

class Address {
  @prop({ type: String })
  public building: string;

  @prop({ type: Array, required: true })
  public coord: mongoose.Types.Array<number>;

  @prop({ type: String })
  public street: string;

  @prop({ type: String })
  public zipcode: string;
}

class Grades {
  @prop({ type: Date })
  public date: Date;

  @prop({ type: String })
  public grade: string;

  @prop({ type: Number })
  public score: number;
}

export class Restaurants {
  @prop({ type: () => Address })
  public address: Address;

  @prop({ type: String })
  public borough: string;

  @prop({ type: String })
  public cuisine: string;

  @prop({ type: () => [Grades] })
  public grades: mongoose.Types.Array<Grades>;

  @prop({ type: String })
  public name: string;

  @prop({ type: String })
  public restaurant_id: string;
}

export const RestaurantModel = getModelForClass(Restaurants, {
  schemaOptions: {
    timestamps: true,
  },
});
