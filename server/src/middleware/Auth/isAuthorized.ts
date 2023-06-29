
import express from 'express'

import * as Core from '../../core'
import * as Services from '../../services'

export const isAuthorized = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    
    if (!token) throw new Core.custom.GlobalError('No token present', 401)

    const firebaseUser = await Services.firebase.auth().verifyIdToken(token)
    
    if (!firebaseUser) throw new Core.custom.GlobalError('firebase auth fail', 401)
    
    next()

  }
  
  catch (err) {
    console.log(err)
    res.status(401).json({
      status: 'failed',
      message: 'not authorized'
    })
  }
}