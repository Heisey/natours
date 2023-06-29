
import * as firebase from 'firebase/app'

import * as Core from '../../core'

export const init = firebase.initializeApp(Core.config.firebase)
