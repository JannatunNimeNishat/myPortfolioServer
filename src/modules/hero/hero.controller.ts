import { Request, Response } from "express";
import { HeroService } from "./hero.service";

const createHero = async (req: Request, res: Response) => {
  try {
    const result = await HeroService.createHeroIntoDB(req.body);
    res.json({
      message: "Hero created Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};
const getHero = async (req: Request, res: Response) => {
  try {
    const result = await HeroService.getHeroFromDB();
    res.json({
      message: "Hero successfully fetched",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};
const editHero = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await HeroService.editHeroIntoDB(id, req.body);
    res.json({
      message: "Hero edited Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
};
const deleteHero = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await HeroService.deleteHeroFromDB(id);
    res.json({
      message: "Hero deleted Successfully",
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
    const result = await HeroService.changeStatusIntoDB(id);
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

export const HeroController = {
  createHero,
  getHero,
  editHero,
  deleteHero,
  changeStatus
};
