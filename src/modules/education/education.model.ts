import { Schema, model } from "mongoose";
import { IEducation } from "./education.interface";

const educationSchema = new Schema<IEducation>(
  {
    degreeName: { type: String, required: true },
    institute: { type: String, required: true },
    duration: { type: String, required: true },
    result: { type: String, required: true },
    skills: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

export const Education = model<IEducation>("Education", educationSchema);
