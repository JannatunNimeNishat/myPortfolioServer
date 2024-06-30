import { Request, Response } from "express";
import { AboutServices } from "./about.services";

const createAbout = async (req: Request, res: Response) => {
  try {
    const result = await AboutServices.createAboutIntoDB(req.body);
    res.json({
      message: "About created Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};

const getAbout = async (req: Request, res: Response) => {
  try {
    const result = await AboutServices.getAboutFromDB();
    res.json({
      message: "about fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};

const editAbout = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await AboutServices.editAboutIntoDB(id, req.body);
    res.json({
      message: "About updated Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};

export const AboutController = {
  createAbout,
  getAbout,
  editAbout,
};
