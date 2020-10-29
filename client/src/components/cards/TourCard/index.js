import React from 'react' 
import styles from './styles'
import { Buttons } from '../../'

const TourCard = (props) => {

  const { 
    tourData,
    tourImage
  } = props

  const shortenDescription = (description) => {
    const words = description.split(' ')

    return `${words[0]} ${words[1]} ${words[2]} ${words[3]} ${words[4]} ${words[5]} ${words[6]} ${words[7]} ${words[8]} ${words[9]}`
  }

  return (
    <div>
      <styles.TourCard>
        <styles.Header>
          <styles.ImageContainer>
            <styles.ImageOverlay />
            <styles.CardImage 
              src={tourImage}
            />
          </styles.ImageContainer>
          <styles.TourTitle>
            <span>
              {tourData.name}
            </span>
          </styles.TourTitle>
        </styles.Header>

        <styles.Body>
          <styles.SubHeading>
            {tourData.difficulty} {tourData.duration}-DAY TOUR
          </styles.SubHeading>

          <styles.TourDescription>
            {shortenDescription(tourData.description)}
          </styles.TourDescription>

          <styles.DetailContainer>
            <i className="fas fa-map-marker-alt"></i> San Francisco, US
          </styles.DetailContainer>

          <styles.DetailContainer>
            <i className="fas fa-calendar-alt"></i> {tourData.startDates[0]}
          </styles.DetailContainer>

          <styles.DetailContainer>
            <i className="fas fa-flag"></i> Stops 1
          </styles.DetailContainer>

          <styles.DetailContainer>
            <i className="fas fa-user-alt"></i> 7 People
          </styles.DetailContainer>
        </styles.Body>
      
        <styles.Footer>
          <styles.TourPrice>
            <span>${tourData.price}</span> per person
          </styles.TourPrice>
          <styles.TourRating>
            <span>{tourData.ratingsAverage}</span> rating {`(${tourData.ratingsQuantity})`}
          </styles.TourRating>
          <Buttons.Primary 
            color='green'
            to={`/tours/${tourData.id}`}
          >
            Details
          </Buttons.Primary>
        </styles.Footer>
      </styles.TourCard>
    </div>
  )
}

export default TourCard