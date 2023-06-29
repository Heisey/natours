
import express from 'express'

import * as M from '../../Models'
import * as Utils_Promise from '../../utils/promise'

export const averages = Utils_Promise.catchAsync(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const stats = await M.Tour.aggregate([
    {
      $group: {
        _id: null,
        numOfTours: { $sum: 1 },
        numOfRatings: { $sum: 'ratingsQuantity' }, 
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' }
      }
    }
  ])

  res.status(200).json({
    status: 'success',
    data: {
      stats
    }
  })
})

export const difficultyAverages = Utils_Promise.catchAsync(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const stats = await M.Tour.aggregate([
    {
      $group: {
        _id: '$difficulty',
        numOfTours: { $sum: 1 },
        numOfRatings: { $sum: 'ratingsQuantity' }, 
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' }
      }
    }
  ])

  res.status(200).json({
    status: 'success',
    data: {
      stats
    }
  })
})

export const priceRange = Utils_Promise.catchAsync(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const stats = await M.Tour.aggregate([
    {
      $group: {
        _id: null,
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' }
      }
    }
  ])

  res.status(200).json({
    status: 'success',
    data: {
      stats
    }
  })
})

export const getMonthPlan = Utils_Promise.catchAsync(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  
  const stats = await M.Tour.aggregate([
    {
      $unwind: '$startDates'
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${req.params.year}-01-01`),
          $lt: new Date(`${req.params.year}-12-31`)
        }
      }
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numOfTours: { $sum: 1 },
        tours: { $push: '$name' }
      }
    },
    {
      $addFields: { month: '$_id' }
    },
    {
      $project: { _id: 0 }
    },
    {
      $sort: { month: 1 }
    }
  ])

  const numberOfRecords = await M.Tour.countDocuments()
  
  res.status(200).json({
    status: 'success',
    data: {
      records: numberOfRecords,
      stats
    }
  })
})