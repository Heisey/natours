
import * as I from './'

export interface Review {
  feedback: string
  rating: number
  user: I.User
  tour: I.Tour
  createdAt: Date
}