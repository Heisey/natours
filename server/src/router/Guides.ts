
import express from 'express'

import * as Controllers from '../controllers'

export const Guides = express.Router()

Guides
  .route('/')
  .get(Controllers.Guides.Info.getAll)