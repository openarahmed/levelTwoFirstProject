import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFacultyModel } from './academicFaculty.module';

const createAcademicFacultyToDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);
  return result;
};

const getAllAcademicFecultiesFromDB = async () => {
  const result = await AcademicFacultyModel.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFacultyModel.findOne({ id });
  return result;
};

const updateAcademicFaculty = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFacultyModel.updateOne(
    { id },
    { $set: payload },
  );
  return result;
};

export const AcademicFacultyService = {
  createAcademicFacultyToDB,
  getAllAcademicFecultiesFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFaculty,
};
