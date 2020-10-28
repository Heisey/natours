import React from 'react'
import styles from './styles'

const TourflipCard = props => {

  const {
    color,
    tourData,
    tourImage
  } = props

  return (
    <styles.TourFlipCard>
      <styles.FrontSide>
        <styles.CardPictureOne 
          color={color}
          image={tourImage}
        />
        <styles.HeadingContainer>
          <styles.Title
            color={color}
          >
            {tourData.name}
          </styles.Title>
        </styles.HeadingContainer>
        <styles.DetailContainer>
          <styles.List>
            <styles.ListItem>{tourData.duration} day tour</styles.ListItem>
            <styles.ListItem>Up to {tourData.maxGroupSize} people</styles.ListItem>
            <styles.ListItem>2 tour guides</styles.ListItem>
            <styles.ListItem>Sleep in cozy hostels</styles.ListItem>
            <styles.ListItem
              last
            >
              Difficulty: {tourData.difficulty}
            </styles.ListItem>
          </styles.List>
        </styles.DetailContainer>
      </styles.FrontSide>
      <styles.BackSide
        color={color}
      >
        <styles.CallToActionContainer>
          <styles.PriceBox>
            <styles.TopText>Only</styles.TopText>
            <styles.BottomText>${tourData.price}</styles.BottomText>
          </styles.PriceBox>
          <a href="#popup" className="btn btn--white">Book now!</a>
        </styles.CallToActionContainer>
      </styles.BackSide>
    </styles.TourFlipCard>
  )
}

export default TourflipCard