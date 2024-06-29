import { ISkill } from "./skill.interface";
import { Skill } from "./skill.model";

const createSkillIntoDB = async (payload: ISkill) => {
  const result = await Skill.create(payload);
  return result;
};

const getSkillFromDB = async () => {
  const result = await Skill.find();
  return result;
};

const editSkillIntoDB = async (id: string, payload: Partial<ISkill>) => {
  const result = await Skill.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const SkillService = {
  createSkillIntoDB,
  getSkillFromDB,
  editSkillIntoDB,
};
