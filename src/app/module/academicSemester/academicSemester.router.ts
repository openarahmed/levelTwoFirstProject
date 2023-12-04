import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation.academicSemesterValidationSchema),
  AcademicSemesterController.createAcademicSemester,
);
router.get(
  '/:semesterId',
  AcademicSemesterController.getSingleAcademicSemester,
);

router.patch('/:semesterId', AcademicSemesterController.updateAcademicSemester);

router.get('/', AcademicSemesterController.getAllAcademicSemester);

export const AcademicSemesterRoute = router;
