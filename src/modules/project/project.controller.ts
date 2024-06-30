import { Request, Response } from "express";
import { ProjectServices } from "./project.services";

const createProject = async (req: Request, res: Response) => {
  const result = await ProjectServices.createProjectIntoDB(req.body);
  try {
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

export const ProjectController = {
  createProject,
};
