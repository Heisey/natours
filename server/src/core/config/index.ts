
import * as firebaseAdmin from 'firebase-admin'
import firebaseConfig from './firebase.json'

export * from './env'

export const firebase = firebaseConfig as firebaseAdmin.ServiceAccount