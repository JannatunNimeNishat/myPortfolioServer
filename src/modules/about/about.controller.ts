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

const deleteAbout = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await AboutServices.deleteAboutFromDB(id);
    res.json({
      message: "About deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};

const changeStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await AboutServices.changeStatusIntoDB(id);
    res.json({
      message: "Status Changed Successfully",
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
  deleteAbout,
  changeStatus
};
