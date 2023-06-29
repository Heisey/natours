
import * as I from './'

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
  environment: I.TripType
  startLocation: I.StartLocation
  locations: [I.TripPoint]
  guides: I.User[]
  reviews: I.Review[]
}