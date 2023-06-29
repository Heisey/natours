
import express from 'express'

import * as Controllers from '../controllers'
import * as Middleware from '../middleware'

export const Tour = express.Router()

Tour
  .route('/')
  .get(Controllers.Tours.Tour.getAll)
  // TODO Add permissions and roles
  .post(Controllers.Tours.Tour.create)

Tour
  .route('/:id')
  .get(Controllers.Tours.Tour.get)
  // TODO Add permissions and roles
  .patch(Controllers.Tours.Tour.update)
  .delete(Controllers.Tours.Tour.remove)

Tour
  .get('/stats/price', Controllers.Tours.Stats.priceRange)
  .get('/stats/averages', Controllers.Tours.Stats.averages)
  .get('/stats/difficultyAverages', Controllers.Tours.Stats.difficultyAverages)

Tour
  .get('/plan/:year', Controllers.Tours.Stats.getMonthPlan)
