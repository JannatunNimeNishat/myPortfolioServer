import { Request, Response } from "express";
import { EducationServices } from "./education.service";

const createEducation = async (req: Request, res: Response) => {
  try {
    const result = await EducationServices.createEducationIntoDB(req.body);
    res.json({
      message: "Education created Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};

const getEducation = async (req: Request, res: Response) => {
  try {
    const result = await EducationServices.getEducationFromDB();
    res.json({
      message: "Education fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};

const editEducation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await EducationServices.editEducationIntoDB(id, req.body);
    res.json({
      message: "Education updated Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};

const deleteEducation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await EducationServices.deleteEducationIntoDB(id);
    res.json({
      message: "Education deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};


export const EducationController = {
  createEducation,
  getEducation,
  editEducation,
  deleteEducation
};

