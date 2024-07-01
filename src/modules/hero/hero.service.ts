import { IHero } from "./hero.interface";
import { Hero } from "./hero.model";

const createHeroIntoDB = async (payload: IHero) => {
  const result = await Hero.create(payload);
  return result;
};
const getHeroFromDB = async () => {
  const result = await Hero.find();
  return result;
};
const editHeroIntoDB = async (id: string, payload: Partial<IHero>) => {
  const result = await Hero.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
const deleteHeroFromDB = async (id: string) => {
  const result = await Hero.findByIdAndDelete(id);
  return result;
};

const changeStatusIntoDB = async (id: string) => {
  console.log('reached',id);
  // First, find the hero by id
  const hero = await Hero.findById(id);

  if (!hero) {
    throw new Error("Hero not found");
  }

  // If the hero's status is being set to true, update all other heroes to false
  if (!hero.status) {
    // Set all other heroes' statuses to false
  const res =  await Hero.updateMany({ _id: { $ne: id } }, { status: false });

    // Update the status of the specific hero to true
    hero.status = true;
  } else {
    // If the hero's status is being set to false, just update its status
    hero.status = false;
  }

  const updatedHero = await hero.save();
  return updatedHero;
};


export const HeroService = {
  createHeroIntoDB,
  getHeroFromDB,
  editHeroIntoDB,
  deleteHeroFromDB,
  changeStatusIntoDB,
};
