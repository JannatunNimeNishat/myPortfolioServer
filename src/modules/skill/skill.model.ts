import { Schema, model } from "mongoose";
import { ISkill } from "./skill.interface";

const skillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  percentage: { type: Number },
  photoUrl: { type: Number },
});

export const Skill = model<ISkill>("skill", skillSchema);
