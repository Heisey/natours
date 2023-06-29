
import express from 'express'

import * as Controllers from '../controllers'
import * as Middleware from '../middleware'

export const AdminGuides = express.Router()

// AdminGuides.use(Middleware.Auth.isAuthorized)

AdminGuides
  .route('/')
  .get(Controllers.Users.Guides.getAll)
  .post(Middleware.Auth.isAuthorized, Controllers.Users.Guides.create)