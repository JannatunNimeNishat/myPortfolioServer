import { IAbout } from "./about.interface";
import { About } from "./about.model";

const createAboutIntoDB = async (payload: IAbout) => {
  const result = await About.create(payload);
  return result;
};

const getAboutFromDB = async () => {
  const result = await About.find();
  return result;
};

const editAboutIntoDB = async (id: string, payload: Partial<IAbout>) => {
  const result = await About.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteAboutFromDB = async (id: string) => {
  const result = await About.findByIdAndDelete(id);
  return result;
};

const changeStatusIntoDB = async (id: string) => {
  // First, find the hero by id
  const hero = await About.findById(id);

  if (!hero) {
    throw new Error("About not found");
  }

  // If the hero's status is being set to true, update all other heroes to false
  if (!hero.status) {
    // Set all other heroes' statuses to false
    const res = await About.updateMany({ _id: { $ne: id } }, { status: false });

    // Update the status of the specific hero to true
    hero.status = true;
  } else {
    // If the hero's status is being set to false, just update its status
    hero.status = false;
  }

  const updatedHero = await hero.save();
  return updatedHero;
};

export const AboutServices = {
  createAboutIntoDB,
  getAboutFromDB,
  editAboutIntoDB,
  deleteAboutFromDB,
  changeStatusIntoDB,
};
