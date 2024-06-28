import { Schema, model } from "mongoose";
import { IHero } from "./hero.interface";

const heroSchema = new Schema<IHero>(
  {
    greetings: { type: String, required: true },
    name: { type: String, required: true },
    dentation: { type: String, required: true },
    tags: { type: [String], required: true },
    heroImg: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

export const Hero = model<IHero>("Hero", heroSchema);
