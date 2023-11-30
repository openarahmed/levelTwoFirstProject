/* eslint-disable no-unused-vars */
import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { academicSemesterService } from './academicSemester.service';

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await academicSemesterService.createAcademicSemesterToDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'academic semester is created succssfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
};
