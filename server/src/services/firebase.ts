
import firebaseAdmin from 'firebase-admin'

import * as Core from '../core'

export const firebase = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(Core.config.firebase)
});