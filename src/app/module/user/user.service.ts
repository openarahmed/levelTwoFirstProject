import config from '../../config';
import { AcademicSesemterModel } from '../academicSemester/academicSemester.modul';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { Tuser } from './user.interface';
import { UserModel } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentToDB = async (password: string, studentData: Student) => {
  const userData: Partial<Tuser> = {};

  userData.password = password || (config.default_pass as string);

  userData.role = 'student';

  const admissionSemester = await AcademicSesemterModel.findById(
    studentData.admissionSemester,
  );

  userData.id = await generateStudentId(admissionSemester!);

  const newUser = await UserModel.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createStudentToDB,
};
