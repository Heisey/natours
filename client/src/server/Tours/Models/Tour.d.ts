
import * as Server_Tours_Models from './'

export interface Tour {
  id: string
  name: string
  duration: number
  maxGroupSize: number
  difficulty: string
  ratingsAverage: number
  ratingsQuantity: number
  price: number
  summary: string
  description: string
  imageCover: string
  images: string[]
  startDates: string[]
  createdAt: Date
  environment: Server_Tours_Models.Environment
}

