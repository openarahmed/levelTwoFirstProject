import express from 'express';
import { UserRoute } from '../module/user/user.route';
import { StudentsRoute } from '../module/student/student.route';
import { AcademicSemesterRoute } from '../module/academicSemester/academicSemester.router';
import { academicFacultyRoute } from '../module/academicFaculty/academicFaculty.route';
import { academicDepartmentRoute } from '../module/academicDepartment/academicDepartment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoute,
  },
  {
    path: '/students',
    route: StudentsRoute,
  },
  {
    path: '/academic-semeters',
    route: AcademicSemesterRoute,
  },
  {
    path: '/academic-faculty',
    route: academicFacultyRoute,
  },
  {
    path: '/academic-department',
    route: academicDepartmentRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
