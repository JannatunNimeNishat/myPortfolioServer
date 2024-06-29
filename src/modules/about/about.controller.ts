import { Request, Response } from "express";
import { AboutServices } from "./about.services";

const createAbout = async(req:Request,res:Response)=>{
    const result = await AboutServices.createAboutIntoDB(req.body) ;
    try {
        res.json({
            message:"About created Successfully",
            data:result
        })
    } catch (error) {
        res.json({
            message:'Something went wrong',
            error:error
        })
    }
}
const getAbout = async(req:Request,res:Response)=>{
    const result = await AboutServices.getAboutFromDB() ;
    try {
        res.json({
            message:"about fetched Successfully",
            data:result
        })
    } catch (error) {
        res.json({
            message:'Something went wrong',
            error:error
        })
    }
}



export const AboutController = {
    createAbout,
    getAbout,
}