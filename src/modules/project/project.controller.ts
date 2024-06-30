import { Request, Response } from "express";
import { ProjectServices } from "./project.services";

const createProject = async (req: Request, res: Response) => {
  try {
    const result = await ProjectServices.createProjectIntoDB(req.body);
    res.json({
      message: "Project created Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};
const getProject = async (req: Request, res: Response) => {
  try {
    const result = await ProjectServices.getProjectFromDB();
    res.json({
      message: "Project fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};

export const ProjectController = {
  createProject,
  getProject,
};
