
import * as firebaseAuth from 'firebase/auth'
import * as Mx from 'mobx'

// import * as Server_User from 'server/User'
import * as Service_Firebase from 'services/firebase'
import * as Stores from 'store'

import * as M_Auth from './Models'



export class Store implements M_Auth.Auth {

  private rootStore: Stores.Root

  constructor(rootStore: Stores.Root) {
    this.rootStore = rootStore
    
    Mx.makeAutoObservable(this)
  }

  // is Authorized
  public isAuthorized: boolean = false

  public setIsAuthorized = (isAuthorized: boolean) => this.isAuthorized = isAuthorized

  // token 
  public token?: string = undefined

  public setToken = (token: string) => this.token = token

  public clearToken = () => this.token = undefined

  public setGlobalUser = (args: {
    token: string
    isAuthorized: boolean
  }) => {
    this.token = args.token
    this.isAuthorized = args.isAuthorized
  }

  public create = async (args: M_Auth.LoginArgs) => {
    
    let result: string | undefined = undefined

    await firebaseAuth
      .createUserWithEmailAndPassword(Service_Firebase.auth, args.email, args.password)
      .then(cred => cred.user.getIdToken().then(token => result = token))
      
    return result
  }

  public login = async (args: M_Auth.LoginArgs) => {
    await firebaseAuth
      .signInWithEmailAndPassword(Service_Firebase.auth, args.email, args.password)
      .then(cred => {
        cred.user.getIdToken().then(token => this.setToken(token))
        this.setIsAuthorized(true)
      })
      .catch(err => {
        console.log('firebase sign in error, ')
        console.log(err)
      })
  }

  public logout = async () => {
    await firebaseAuth.signOut(Service_Firebase.auth)
    this.setIsAuthorized(false)
    this.clearToken()
  }

  
  public updatePassword = async (args: M_Auth.UpdatePasswordArgs) => {
    try {
      const credential = firebaseAuth.EmailAuthProvider.credential(this.rootStore.user.info.email, args.password )
      const firebaseUser = Service_Firebase.auth.currentUser!
  
      await firebaseAuth.reauthenticateWithCredential(firebaseUser, credential)
      
      await firebaseAuth.updatePassword(firebaseUser, args.updatedPassword)

      return true
    } catch (err) {
      console.log(err)
      return false
    }

  }
}
