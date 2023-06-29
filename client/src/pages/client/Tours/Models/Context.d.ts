
import * as Server_Tours from 'server/Tours'

export interface Context {
  tours?: Server_Tours.Models.Tour[]
  numberOfTours?: number  
}