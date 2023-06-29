
import * as firebaseAuth from 'firebase/auth'

import * as Service_Firebase from './'

export const auth = firebaseAuth.getAuth(Service_Firebase.init)