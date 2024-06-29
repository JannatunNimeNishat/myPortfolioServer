import { Request, Response } from "express";

const createSkill = async (req: Request, res: Response) => {
  const result = await req.body;
  try {
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
};
