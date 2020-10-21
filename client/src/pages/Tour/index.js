

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from '../../redux'
import { Core, Headers } from '../../components'

import tour1Image from '../../assets/images/tour-1-cover.jpg'
import tour2Image from '../../assets/images/tour-2-cover.jpg'
import tour3Image from '../../assets/images/tour-3-cover.jpg'
import tour4Image from '../../assets/images/tour-4-cover.jpg'
import tour5Image from '../../assets/images/tour-5-cover.jpg'
import tour6Image from '../../assets/images/tour-6-cover.jpg'
import tour7Image from '../../assets/images/tour-7-cover.jpg'
import tour8Image from '../../assets/images/tour-8-cover.jpg'
import tour9Image from '../../assets/images/tour-9-cover.jpg'

const Tour = (props) => {
  
  const {
    tour,
    getTourById
  } = props

  const { id } = useParams()

  useEffect(() => {

    getTourById(id)
  }, [id, getTourById]) 

  const tourImageHandler = (tourImageName) => {
    switch(tourImageName) {
      case 'tour-1-cover.jpg':
        return tour1Image
      case 'tour-2-cover.jpg':
        return tour2Image
      case 'tour-3-cover.jpg':
        return tour3Image
      case 'tour-4-cover.jpg':
        return tour4Image
      case 'tour-5-cover.jpg':
        return tour5Image
      case 'tour-6-cover.jpg':
        return tour6Image
      case 'tour-7-cover.jpg':
        return tour7Image
      case 'tour-8-cover.jpg':
        return tour8Image
      case 'tour-9-cover.jpg':
        return tour9Image
    }
  }

  return (
    <div>
      <Headers.SecondaryHeader />
      <Core.JumboTron
        name={tour ? tour.name : 'Puppies'}
        image={tourImageHandler(tour ? tour.imageCover : 'tour-1-cover.jpg')} 
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  if (state.tours) {
    return {
      tour: state.tours.allTours
    }
  }
  return {
    tour: null
  }
}

export default connect(mapStateToProps, {
  getTourById: actions.getTourById
})(Tour)