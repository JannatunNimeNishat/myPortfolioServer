import { IExperience } from "./experience.interface";
import { Experience } from "./experience.model";

const createExperienceIntoDB = async (payload: IExperience) => {
  const result = await Experience.create(payload);
  return result;
};

export const ExperienceServices = {
  createExperienceIntoDB,
};
