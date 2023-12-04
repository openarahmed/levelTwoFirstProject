import { z } from 'zod';

const academicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'AcademicDepartment must be string',
      required_error: 'Name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'AcademicDepartment must be string',
      required_error: 'faculty is required',
    }),
  }),
});
export const academicDepartmentValidation = {
  academicDepartmentValidationSchema,
};
