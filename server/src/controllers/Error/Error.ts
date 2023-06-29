
import express from 'express'

import * as Core from '../../core'

export const globalError = (err: Core.custom.GlobalError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.statusCode).json(err.statusReport)
}

export const lost = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const error = new Core.custom.GlobalError(`Puppies could not sniff out this route ${req.originalUrl}`, 404)
  next(error)
}