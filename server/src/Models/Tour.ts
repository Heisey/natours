
import mongoose from "mongoose";
import validator from 'validator'

import * as Core from '../core'
import * as Keys from '../keys'
import * as I from '../interfaces'



const TourSchema = new mongoose.Schema<I.Tour>({

  name: { 
    type: String, 
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'A tour name must be <= 50 characters'],
    minlength: [5, 'A tour name must have 5 characters'],
    validate: [(val: string) => validator.isAlpha(val, 'en-US', { ignore: ' ' }), 'A tour must only contain characters']
  },

  price: { 
    type: Number, 
    required: [true, 'A tour must have a price']
  },

  ratingsAverage: {
    type: Number,
    default: 3,
    max: [5, 'A rating cannot be greater then 5']
  },

  ratingsQuantity: {
    type: Number,
    default: 0
  },

  duration: {
    type: Number,
    required: [true, 'A tour must have a duration']
  },

  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a max group size']
  },

  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
    enum: Core.keys.Difficulty
  },

  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a summary']
  },

  description: {
    type: String,
    trim: true
  },

  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image']
  },

  images: {
    type: [String],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },

  startDates: [Date],
  
  environment: {
    type: Number,
    enum: [  
      Keys.TripType.OCEAN,
      Keys.TripType.FOREST,
      Keys.TripType.SNOW, 
      Keys.TripType.SAND, 
      Keys.TripType.URBAN
    ],
    required: [true, 'A trip must have a environment selected']
  },

  startLocation: {
    type: {
      type: String,
      default: 'Point',
      enum: ['Point']
    },
    description: {
      type: String
    },
    coordinates: {
      type: [Number]
    },
    address: {
      type: String
    }
  },

  locations: [
    {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point']
      },
      description: {
        type: String
      },
      coordinates: {
        type: [Number]
      },
      day: Number
    }
  ],

  guides: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  ],

  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Review'
    }
  ]
})

TourSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
TourSchema.set('toJSON', { virtuals: true });
TourSchema.set('toObject', { virtuals: true })

export const Tour = mongoose.model('Tour', TourSchema)