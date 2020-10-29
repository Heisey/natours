import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Cards, Footers, Headers } from '../../components'
import { actions } from '../../redux'
import styles from './styles'
import assets from '../../assets'

const Tours = (props) => {

  const {
    getAllTours,
    tours
  } = props

  const tourImageHandler = (tourImageName) => {
    switch(tourImageName) {
      case 'tour-1-cover.jpg':
        return assets.images.tourOneCover
      case 'tour-2-cover.jpg':
        return assets.images.tourTwoCover
      case 'tour-3-cover.jpg':
        return assets.images.tourThreeCover
      case 'tour-4-cover.jpg':
        return assets.images.tourFourCover
      case 'tour-5-cover.jpg':
        return assets.images.tourFiveCover
      case 'tour-6-cover.jpg':
        return assets.images.tourSixCover
      case 'tour-7-cover.jpg':
        return assets.images.tourSevenCover
      case 'tour-8-cover.jpg':
        return assets.images.tourEightCover
      case 'tour-9-cover.jpg':
        return assets.images.tourNineCover
      default:
        return assets.images.tourOneCover
    }
  }

  useEffect(() => {
    getAllTours()
  }, [getAllTours])
  
  const renderTours = () => {

    if (tours) {
      return tours.map(tour => (
        <Cards.TourCard
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
      <Footers.PrimaryFooter />
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