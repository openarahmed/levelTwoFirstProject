import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(
    academicDepartmentValidation.academicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.createAcademicDepartment,
);
router.get(
  '/:departmentId',
  validateRequest(
    academicDepartmentValidation.academicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.getSingleAcademicDepartment,
);

// router.put(
//   '/:departmentId',
//   validateRequest(academicFacultyValidation.academicFacultyValidationSchema),
//   AcademicFacultyController.updateAcademicFaculty,
// );

router.get('/', AcademicDepartmentController.getAllAcademicDepartment);

export const academicDepartmentRoute = router;
