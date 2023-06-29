
import mongoose from "mongoose";
import validator from "validator";

import * as I from '../interfaces'

const UserSchema = new mongoose.Schema<I.User>({
  firstName: {
    type: String,
    required: [true, 'A name is required']
  },
  lastName: {
    type: String,
    required: [true, 'A name is required']
  },
  email: {
    type: String,
    required: [true, 'A email is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'email must be valid']
  },
  photo: {
    type: String
  },
  role: {
    type: String,
    emum: ['user' , 'guide' , 'admin'],
    default: 'user'
  }
})

export const User = mongoose.model('User', UserSchema)