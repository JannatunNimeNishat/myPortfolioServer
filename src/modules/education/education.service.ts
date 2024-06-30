import { IEducation } from "./education.interface";
import { Education } from "./education.model";

const createEducationIntoDB = async (payload: IEducation) => {
    const result = await Education.create(payload);
    return result;
  };


  export const EducationServices = {
   createEducationIntoDB
  };