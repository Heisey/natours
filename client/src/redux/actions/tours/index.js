import axios from 'axios'

export const getAllTours = () => {
  
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/tours')

    dispatch({
      type: 'GET_ALL_TOURS',
      payload: response.data.results
    })
  }
}

export const getTourById = (id) => {

  return async dispatch => {
    
    const response = await axios.get(`http://localhost:3001/tours/${id}`)
    
    dispatch({
      type: 'GET_TOUR_BY_ID',
      payload: response.data.results
    })
  }
}

export const getTopThreeTours = () => {

  return async dispatch => {
    const response = await axios.get('http://localhost:3001/tours')
    const tours = response.data.results
    const topTours =[tours[0], tours[1], tours[2]]

    dispatch({
      type: 'GET_TOP_THREE_TOURS',
      payload: topTours
    })
  }
}