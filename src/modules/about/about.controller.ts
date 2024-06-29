import { Request, Response } from "express";

const createAbout = async(req:Request,res:Response)=>{
    const result;
    try {
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


export const AboutController = {
    createAbout
}