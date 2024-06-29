import { Schema, model } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  projectImg: { type: String, required: true },
  technologyUsed: { type: [String], required: true },
  liveLink: { type: [String], required: true },
  gitLinks: { type: [String], required: true },
});

export const Project = model<IProject>("project", projectSchema);
