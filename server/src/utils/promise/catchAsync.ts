
import express from 'express'

import * as Core from '../../core'

export const catchAsync = (cb: (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<void>) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => cb(req, res, next).catch(err => {
    return next(new Core.custom.GlobalError(err))
  })
}