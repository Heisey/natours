import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Core } from '../../components'
import { actions } from '../../redux'

const Tours = (props) => {

  const {
    getAllTours,
    tours
  } = props

  useEffect(() => {
    getAllTours()
  }, [getAllTours])
  
  const renderTours = () => {

    if (tours) {
      console.log(tours)
      return tours.allTours.map(tour => (
        <span>{tour.name}</span>
      ))
    } else {
      return (<span>Getting Tours</span>)
    }
  }

  return (
    <div>
      <Core.SecondaryHeader />
      {renderTours()}
    </div>
  )
}

const mapStateToProps = (state) => {
  let tours
  if (state.tours) {
    tours = state.tours.allTours
  }
  return {
    tours: state.tours
  }
}

export default connect(mapStateToProps, {
  getAllTours: actions.getAllTours
})(Tours)