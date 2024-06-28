import { Request, Response } from "express";
import { HeroService } from "./hero.service";

const createHero = async(req:Request,res:Response)=>{
    try {
        const result = await HeroService.createHeroIntoDB(req.body);
        res.json({
            message:"Hero created Successfully",
            data:result
        })
    } catch (error) {
        res.json({
            message:'Something went wrong',
            error:error
        })
    }

}
const getHero = async(req:Request,res:Response)=>{
    try {
        const result = await HeroService.getHeroFromDB();
        res.json({
            message:"Hero successfully fetched",
            data:result
        })
    } catch (error) {
        res.json({
            message:'Something went wrong',
            error:error
        })
    }

}


export const HeroController = {
    createHero,
    getHero,
}