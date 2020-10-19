import { combineReducers } from 'redux'

import tours from './tours'

export default combineReducers({
  puppies: () => 'redux puppies',
  tours
})