
import * as Mx from 'mobx'

import * as Server_Tours from 'server/Tours'

import * as M_Tour from './Models'

export class Store implements M_Tour.Tour {

  constructor() {
    Mx.makeAutoObservable(this)
  }

  public getTours = async () => await Server_Tours.api.tours.getAll()
}
