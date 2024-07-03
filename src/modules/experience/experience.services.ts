import { IExperience } from "./experience.interface";
import { Experience } from "./experience.model";

const createExperienceIntoDB = async (payload: IExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const getExperienceFromDB = async () => {
  const result = await Experience.find();
  return result;
};

const editExperienceIntoDB = async (
  id: string,
  payload: Partial<IExperience>
) => {
  const result = await Experience.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteExperienceFromDB = async (id: string) => {
  const result = await Experience.findByIdAndDelete(id);
  return result;
};

export const ExperienceServices = {
  createExperienceIntoDB,
  getExperienceFromDB,
  editExperienceIntoDB,
  deleteExperienceFromDB,
};
