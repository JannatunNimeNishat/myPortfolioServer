import { Request, Response } from "express";
import { SkillService } from "./Skill.service";

const createSkill = async (req: Request, res: Response) => {
  try {
    const result = await SkillService.createSkillIntoDB(req.body);
    res.json({
      message: "Skill created Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};
const getSkill = async (req: Request, res: Response) => {
  try {
    const result = await SkillService.getSkillFromDB();
    res.json({
      message: "Skill fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};

const editSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await SkillService.editSkillIntoDB(id, req.body);
    res.json({
      message: "Skill created Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};

export const SkillController = {
  createSkill,
  getSkill,
  editSkill,
};
