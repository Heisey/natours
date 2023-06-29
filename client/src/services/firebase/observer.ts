

import * as firebaseAuth from 'firebase/auth'


import * as Service_Firebase from './'

interface ObserverArgs {
  isAuth: boolean
  token?: string
  setToken: (token: string) => void
  setIsAuth: (isAuth: boolean) => void
  setEmail: (email: string) => void
  login: (args: { email: string, token: string}) => void
}

export const observer = (args: ObserverArgs) => firebaseAuth.onAuthStateChanged(Service_Firebase.auth, cred => {
  if (cred) {

    cred.getIdToken().then(token => {
        if (token !== args.token) {
          args.setToken(token)

          if (cred.email) args.setEmail(cred.email)
        }

        if (cred.email) {
          args.setEmail(cred.email)
          args.login({email: cred.email, token})
        }
      } 
    )



    

    if (!args.isAuth) args.setIsAuth(true)

  } else {
    console.log('user is signed out')
  }
})
