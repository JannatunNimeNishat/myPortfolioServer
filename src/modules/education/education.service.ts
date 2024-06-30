import { IEducation } from "./education.interface";
import { Education } from "./education.model";

const createEducationIntoDB = async (payload: IEducation) => {
    const result = await Education.create(payload);
    return result;
  };

  const getEducationFromDB = async () => {
    const result = await Education.find();
    return result;
  };

  export const EducationServices = {
   createEducationIntoDB,
   getEducationFromDB
  };