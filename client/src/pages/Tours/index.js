import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Core, Headers } from '../../components'
import { actions } from '../../redux'
import styles from './styles'

import tour1Image from '../../assets/images/tour-1-cover.jpg'
import tour2Image from '../../assets/images/tour-2-cover.jpg'
import tour3Image from '../../assets/images/tour-3-cover.jpg'
import tour4Image from '../../assets/images/tour-4-cover.jpg'
import tour5Image from '../../assets/images/tour-5-cover.jpg'
import tour6Image from '../../assets/images/tour-6-cover.jpg'
import tour7Image from '../../assets/images/tour-7-cover.jpg'
import tour8Image from '../../assets/images/tour-8-cover.jpg'
import tour9Image from '../../assets/images/tour-9-cover.jpg'

const Tours = (props) => {

  const {
    getAllTours,
    tours
  } = props

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

  useEffect(() => {
    getAllTours()
  }, [getAllTours])
  
  const renderTours = () => {

    if (tours) {
      return tours.map(tour => (
        <Core.TourCard
          key={tour.id}
          tourData={tour}
          tourImage={tourImageHandler(tour.imageCover)}
        />
      ))
    } else {
      return (<span>Getting Tours</span>)
    }
  }

  return (
    <styles.ToursPage>
      <Headers.SecondaryHeader />
      <styles.ToursContainer>
        {renderTours()}
      </styles.ToursContainer>
    </styles.ToursPage>
  )
}

const mapStateToProps = (state) => {
  if (state.tours) {
    return {
      tours: state.tours.allTours
    }
  } else {
    return {
      tours: null
    }
  }
  
}

export default connect(mapStateToProps, {
  getAllTours: actions.getAllTours
})(Tours)