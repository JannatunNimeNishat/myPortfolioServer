import { IAbout } from "./about.interface";
import { About } from "./about.model";

const createAboutIntoDB = async (payload: IAbout) => {
  const result = await About.create(payload);
  return result;
};

export const AboutServices = {
  createAboutIntoDB,
};
