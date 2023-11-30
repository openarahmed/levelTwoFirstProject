/* eslint-disable no-unused-vars */
import { RequestHandler } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { password, student } = req.body;

  const result = await UserService.createStudentToDB(password, student);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'student created succssfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
