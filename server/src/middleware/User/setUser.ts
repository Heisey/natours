
import express from 'express'

import * as I from '../../interfaces'
import * as M from '../../Models'

export const setUser = async (req: I.UserReq, res: express.Response, next: express.NextFunction) => {
  try {
    const user = await M.User.findOne({ email: req.body.email })
    
    if (!user) return res.status(404).json({
      'status': 'unable to find user'
    })

    req.user = user

    next()
  }
  
  catch (err) {
    console.log(err)
    res.status(401).json({
      status: 'failed',
      message: 'do not have permission'
    })
  }
}