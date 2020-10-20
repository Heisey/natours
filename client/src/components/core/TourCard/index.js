import React from 'react' 
import styles from './styles'


const TourCard = (props) => {

  const { 
    tourData,
    tourImage
  } = props

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
        </styles.Header>
        {tourData.name}
      </styles.TourCard>
    </div>
  )
}

export default TourCard