
import mongoose from "mongoose";

import * as I from '../interfaces'

const ReviewSchema = new mongoose.Schema<I.Review>({

  feedback: {
    type: String,
    required: [true, 'A review must have feedback']
  },

  rating: {
    type: Number,
    required: [true, 'A review must have a rating'],
    min: 1,
    max: 5
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'A review must belong to a user']
  },

  tour: {
    type: mongoose.Types.ObjectId,
    ref: 'Tour',
    required: [true, 'A review must belong to a tour']
  },
  
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
})

// Ensure virtual fields are serialised.
ReviewSchema.set('toJSON', { virtuals: true })
ReviewSchema.set('toObject', { virtuals: true })