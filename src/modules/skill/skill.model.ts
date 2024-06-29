import { Schema, model } from "mongoose";
import { ISkill } from "./skill.interface";

const skillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  percentage: { type: Number, default: null },
  photoUrl: { type: Number, default: null },
});

export const Skill = model<ISkill>("skill", skillSchema);
