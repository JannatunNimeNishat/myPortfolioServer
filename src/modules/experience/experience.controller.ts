import { Request, Response } from "express";

const createExperience = async (req: Request, res: Response) => {
  try {
    const result = await req.body;
    res.json({
      message: "Experience created Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};

export const ExperienceController = {
  createExperience,
};
