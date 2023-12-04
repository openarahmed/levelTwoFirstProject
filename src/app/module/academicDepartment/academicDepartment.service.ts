import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartmentModel } from './academicDepartment.module';

const createAcademicDepartmentToDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartmentModel.create(payload);
  return result;
};

const getAllAcademicFecultiesFromDB = async () => {
  const result = await AcademicDepartmentModel.find();
  return result;
};

const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result = await AcademicDepartmentModel.findOne({ id });
  return result;
};

const updateAcademicDepartment = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartmentModel.updateOne(
    { id },
    { $set: payload },
  );
  return result;
};

export const AcademicDepartmentService = {
  createAcademicDepartmentToDB,
  getAllAcademicFecultiesFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartment,
};
