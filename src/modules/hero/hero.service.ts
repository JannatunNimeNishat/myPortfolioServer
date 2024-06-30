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
export const HeroService = {
  createHeroIntoDB,
  getHeroFromDB,
  editHeroIntoDB,
  deleteHeroFromDB
};
