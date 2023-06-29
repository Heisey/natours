

import express from 'express'

import * as I from '../../interfaces'



export const checkRole = async (roles: string[]) => {
  return (req: I.UserReq, res: express.Response, next: express.NextFunction) => {
    try {

      if (!req.user) return res.status(404).json({
        error: 'unable to find user'
      })

      if (!roles.includes(req.user.role)) return res.status(403).json({
        error: 'you do not have permission'
      })

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
}