import { IProject } from "./project.interface";
import { Project } from "./project.model";

const createProjectIntoDB = async (payload: IProject) => {
  const result = await Project.create(payload);
  return result;
};

const getProjectFromDB = async () => {
  const result = await Project.find();
  return result;
};
const getSingleProjectFromDB = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const editProjectIntoDB = async (id: string, payload: Partial<IProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteProjectFromDB = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getProjectFromDB,
  getSingleProjectFromDB,
  editProjectIntoDB,
  deleteProjectFromDB,
};
