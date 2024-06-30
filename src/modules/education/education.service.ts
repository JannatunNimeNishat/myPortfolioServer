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

  const editEducationIntoDB = async (id: string, payload: Partial<IEducation>) => {
    const result = await Education.findByIdAndUpdate(id, payload, { new: true });
    return result;
  };


  const deleteEducationIntoDB = async (id: string) => {
    const result = await Education.findByIdAndDelete(id);
    return result;
  };
  

  export const EducationServices = {
   createEducationIntoDB,
   getEducationFromDB,
   editEducationIntoDB,
   deleteEducationIntoDB
  };