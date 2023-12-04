import { Schema, model } from 'mongoose';
import validator from 'validator';
import { Guardian, LocalGuradian, Student } from './student.interface';

const guardinaSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  matherName: { type: String },
  matherContactNo: { type: String },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

const localGuardianSchema = new Schema<LocalGuradian>({
  name: { type: String },
  occupation: { type: String },
  contactNo: { type: String },
  adress: { type: String },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    requred: true,
    unique: true,
    ref: 'User',
  },
  name: {
    firstName: {
      type: String,
      required: [true, 'bhai first name sara possible na'],
      maxlength: [20, 'Name cannot be more that 20 charecters'],
      // validate: {
      //   validetor: function (value) {
      //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
      //     return firstNameStr === value;
      //   },
      //   message: '[VALUE] name cannot middle uppercase',
      // },
    },
    middleName: { type: String },
    lastName: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => validator.isAlpha(value),
        message: '{VALUE} is not valid',
      },
    },
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not valid gender',
    },
  },
  dateOfBirth: { type: String },
  email: { type: String },
  contactNo: { type: String },
  emergencyContactNo: { type: String },
  bloodGroupe: {
    type: String,
    enum: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
  },
  permanentAdress: { type: String },
  presentAdress: { type: String },
  guardian: guardinaSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
