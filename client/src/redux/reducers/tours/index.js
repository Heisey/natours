

export default (state = null, action) => {

  switch(action.type) {
    case 'GET_ALL_TOURS':
      console.log(action.payload)
      return { ...state }
    default:
      return state
  }
}