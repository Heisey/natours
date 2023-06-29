
import express from 'express'

import * as M from '../../Models'

export const getAll = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

  const query = {
    role: ['guide', 'lead-guide']
  }
  const data = await M.User.find(query)

  res.status(200).json({
    records: data
  })
}