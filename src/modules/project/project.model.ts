import { Schema, model } from "mongoose";
import {
  IGitLink,
  ILiveLink,
  IProject,
  IProjectImg,
} from "./project.interface";

const projectImgSchema = new Schema<IProjectImg>({
  projectHero: { type: String, required: true },
  img1: { type: String, default: null },
  img2: { type: String, default: null },
});

const liveLinkSchema = new Schema<ILiveLink>({
  client: { type: String },
  server: { type: String },
});

const gitLinkSchema = new Schema<IGitLink>({
  client: { type: String },
  server: { type: String },
});

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    projectImg: { type: projectImgSchema, required: true },
    technologyUsed: { type: [String], required: true },
    liveLink: { type: liveLinkSchema, required: true },
    gitLinks: { type: gitLinkSchema, required: true },
  },
  {
    timestamps: true,
  }
);

export const Project = model<IProject>("project", projectSchema);
