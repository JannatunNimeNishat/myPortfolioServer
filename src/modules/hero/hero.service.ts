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

export const HeroService = {
  createHeroIntoDB,
  getHeroFromDB
};
