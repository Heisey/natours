import * as mongoose from 'mongoose'

export interface Location extends mongoose.Document {
  description: string
  type: string
  coordinates: [number, number]
}