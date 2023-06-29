
import * as Mongoose from 'mongoose'

export interface User {
  firstName: string 
  lastName: string
  email: string
  photo?: string
  role: string
  active: boolean
}