import { Request, Response } from "express";
import { ExperienceServices } from "./experience.services";

const createExperience = async (req: Request, res: Response) => {
  try {
    const result = await ExperienceServices.createExperienceIntoDB(req.body);
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
const editExperience = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ExperienceServices.editExperienceIntoDB(id, req.body);
    res.json({
      message: "Experience updated Successfully",
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
  editExperience
};
