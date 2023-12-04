import express from 'express';
import { academicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(academicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.createAcademicFaculty,
);
router.get(
  '/:facultyId',
  validateRequest(academicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.getSingleAcademicFaculty,
);

router.put(
  '/:fecultyId',
  validateRequest(academicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.updateAcademicFaculty,
);

router.get('/', AcademicFacultyController.getAllAcademicFaculty);

export const academicFacultyRoute = router;
