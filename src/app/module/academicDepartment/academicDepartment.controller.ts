import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicDepartmentService } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentService.createAcademicDepartmentToDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Department created succesfully',
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentService.getAllAcademicFecultiesFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Departments retrived succesfully',
    data: result,
  });
});
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicDepartmentService.getSingleAcademicDepartmentFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic single Department retrived succesfully',
    data: result,
  });
});
// const updateAcademicDepartment = catchAsync(async (req, res) => {
//   const DepartmentId = req.params.DepartmentId;
//   // const DepartmentData = req.body;

//   const result =
//     await AcademicDepartmentService.getSingleAcademicDepartmentFromDB(
//       DepartmentId,
//       req.body,
//     );
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: 'Academic Department updated succesfully',
//     data: result,
//   });
// });

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
};
