
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import hpp from 'hpp'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import mongoSanitizer from 'express-mongo-sanitize'
// import xss from 'xss-clean'

import * as Controller_Error from '../controllers/Error'
import * as Core from '../core'
import * as Router from '../router'

export const Main: express.Application = express()

Main.use(cors())

if (Core.config.ENV === 'development') {
  Main.use(morgan('tiny'))
}

// const limiter = rateLimit({
//   max: 100,
//   // 5 min timer
//   windowMs: 5 * 60 * 1000,
//   message: 'To many requests from this ip'
// })

// Main.use('/api', limiter)
Main.use(helmet())
Main.use(express.json())
Main.use(mongoSanitizer())
// Main.use(xss())
Main.use(hpp({
  whitelist: [
    'duration', 
    'ratingsQuantity', 
    'ratingsAverage', 
    'maxGroupSize', 
    'difficulty', 
    'price'
  ]
}))

Main.use('/api/v1/tours', Router.Tour)
Main.use('/api/v1/users', Router.User)
Main.use('/api/v1/guides', Router.Guides)
Main.use('/api/v1/admin/guides', Router.AdminGuides)

Main.all('*', Controller_Error.lost)

Main.use(Controller_Error.globalError)