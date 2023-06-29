
import * as Mx from 'mobx'

import * as Server_User from 'server/User'

import * as Stores from '../'

export class Store {

  private rootStore: Stores.Root

  constructor(rootStore: Stores.Root) {
    this.rootStore = rootStore
    
    Mx.makeAutoObservable(this)
  }

  public info: Server_User.Models.Info = {} as Server_User.Models.Info

  public setInfo = (info: Server_User.Models.Info) => this.info = { ...this.info, ...info }
  public setInfoEmail = (email: string) => this.info = { ...this.info, email }

  public createUser = async (data: Server_User.Models.User) => {
    if (!this.rootStore.auth.token) return 

    const response = await Server_User.api.Self.create({ data, token: this.rootStore.auth.token! })

    return response
  }

  public login = async (email: string) => {
    if (!this.rootStore.auth.token) return 

    const response = await Server_User.api.Self.login({ email, token: this.rootStore.auth.token })

    this.setInfo(response.info)
  }

  public refresh = async (args: {email: string, token: string}) => {
    const response = await Server_User.api.Self.login(args) 
    
    this.setInfo(response.info)
  }
}
