import { Request, Response } from "express";

const createEducation = async (req: Request, res: Response) => {
    try {
        const result = await (req.body);
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

  export const EducationController = {
    createEducation
  }