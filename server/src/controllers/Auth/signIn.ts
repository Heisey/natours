
import express from 'express'

import * as Core from '../../core'
import * as M from '../../Models'
import * as Services from '../../services'

export const signIn = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const user = await M.User.findOne({ email: req.body.email})

    if (!user) throw new Core.custom.GlobalError('No User found', 404)
    
    return res.status(200).json({
      info: user
    })

  }
  
  catch (err) {
    console.log(err)
    res.status(401).json({
      status: 'failed',
      message: 'not authorized'
    })
  }
}