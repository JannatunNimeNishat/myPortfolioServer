import { Schema, model } from "mongoose";
import { IAbout } from "./about.interface";

const aboutSchema = new Schema<IAbout>(
  {
    desc: { type: String, required: true },
    photoUrl: { type: String, required: true },
    status: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const About = model<IAbout>("About", aboutSchema);
