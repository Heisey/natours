
import * as Mx from 'mobx'

import * as Server_User from 'server/User'
import * as Stores from 'store'

export class Store {

  private rootStore: Stores.Root

  constructor(rootStore: Stores.Root) {
    this.rootStore = rootStore

    Mx.makeAutoObservable(this)
  }

  public create = async (args: {
    email: string,
    password: string
    token: string
    firstName: string
    lastName: string
  }) => {
    await Server_User.api.Guides.create(args)
  }
}
