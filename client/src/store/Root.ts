
import * as Auth from './Auth'
import * as Guides from './Guides'
import * as Tour from './Tour'
import * as User from './User'

export class Root {

  public auth: Auth.Store
  public guides: Guides.Store
  public tour: Tour.Store
  public user: User.Store

  constructor() {
    this.auth = new Auth.Store(this)
    this.user = new User.Store(this)
    this.guides = new Guides.Store(this)
    this.tour = new Tour.Store()
  }
}

export const Store = new Root()