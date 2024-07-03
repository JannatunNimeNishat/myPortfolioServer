import { Schema, model } from "mongoose";
import { IExperience } from "./experience.interface";

const experienceSchema = new Schema<IExperience>(
  {
    companyName: { type: String, required: true },
    duration: { type: String, required: true },
    position: { type: String, required: true },
    desc: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Experience = model<IExperience>("Experience", experienceSchema);
