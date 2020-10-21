

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from '../../redux'

const Tour = (props) => {

  // console.log(useParams())
  const {
    tours,
    getTourById
  } = props

  console.log(tours)
  const { id } = useParams()

  useEffect(() => {

    getTourById(id)
  }, [id, getTourById]) 

  return (
    <div>
      Puppy Tour
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours
  }
}

export default connect(mapStateToProps, {
  getTourById: actions.getTourById
})(Tour)