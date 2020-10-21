export default (state = null, action) => {

  switch(action.type) {
    case 'GET_ALL_TOURS':
      return { ...state, allTours: action.payload }

    case 'GET_TOUR_BY_ID':
      return { ...state, allTours: action.payload}
      
    default:
      return state
  }
}