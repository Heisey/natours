import React from 'react'
import styles from './styles'

const TourflipCard = props => {

  return (
    <styles.TourFlipCard>
      <styles.FrontSide>
        <styles.CardPictureOne />
        <styles.HeadingContainer>
          <styles.Title
            orange
          >
            The Sea Explorer
          </styles.Title>
        </styles.HeadingContainer>
        <styles.DetailContainer>
          <styles.List>
            <styles.ListItem>3 day tour</styles.ListItem>
            <styles.ListItem>Up to 30 people</styles.ListItem>
            <styles.ListItem>2 tour guides</styles.ListItem>
            <styles.ListItem>Sleep in cozy hostels</styles.ListItem>
            <styles.ListItem
              last
            >
              Difficulty: easy
            </styles.ListItem>
          </styles.List>
        </styles.DetailContainer>
      </styles.FrontSide>
      {/* <styles.BackSide
        orange
      >
        <div class="card__cta">
          <div class="card__price-box">
            <p class="card__price-only">Only</p>
            <p class="card__price-value">$297</p>
          </div>
          <a href="#popup" class="btn btn--white">Book now!</a>
        </div>
      </styles.BackSide> */}
    </styles.TourFlipCard>
  )
}

export default TourflipCard