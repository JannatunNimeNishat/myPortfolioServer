import { Schema, model } from "mongoose";
import { IAbout } from "./about.interface";

const aboutSchema = new Schema<IAbout>({
    desc:{type:String,required:true},
    photoUrl:{type:String,required:true},
},{
    timestamps:true
})


export const About = model<IAbout>("About",aboutSchema)
