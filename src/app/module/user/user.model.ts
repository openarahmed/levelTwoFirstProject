import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

import { Tuser } from './user.interface';
import config from '../../config';

const userSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPsswordChange: {
      type: Boolean,
      required: false,
    },
    role: {
      type: String,
      enum: ['student', 'admin', 'feculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

export const UserModel = model<Tuser>('User', userSchema);
