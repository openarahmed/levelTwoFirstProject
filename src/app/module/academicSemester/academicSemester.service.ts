import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSesemterModel } from './academicSemester.modul';

const createAcademicSemesterToDB = async (payload: TAcademicSemester) => {
  const result = await AcademicSesemterModel.create(payload);
  return result;
};

export const academicSemesterService = {
  createAcademicSemesterToDB,
};
