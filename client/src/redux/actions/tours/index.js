import axios from 'axios'

export const getAllTours = () => {
  
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001')

    dispatch({
      type: 'GET_ALL_TOURS',
      payload: response.data.results
    })
  }
}