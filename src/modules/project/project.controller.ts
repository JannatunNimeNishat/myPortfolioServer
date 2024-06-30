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
const editProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.editProjectIntoDB(id, req.body);
  try {
    res.json({
      message: "Project updated Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};

const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProjectServices.deleteProjectFromDB(id);
    res.json({
      message: "Project deleted Successfully",
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
  editProject,
  deleteProject
};
