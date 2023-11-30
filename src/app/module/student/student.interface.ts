import { Types } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  matherContactNo: string;
  matherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGuradian = {
  name: string;
  occupation: string;
  contactNo: string;
  adress: string;
};

export type Student = {
  id: string;
  user: Types.ObjectId;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroupe?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAdress: string;
  permanentAdress: string;
  guardian: Guardian;
  localGuardian: LocalGuradian;
  profileImg?: string;
  isDeleted: boolean;
};
