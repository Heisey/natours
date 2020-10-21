import React from 'react'
import styles from './styles'



const JumboTron = (props) => {
  
  const {
    days,
    image,
    location,
    name
  } = props
  
  return (
    <styles.JumboTron>
      <styles.Overlay />
      <styles.Image 
        src={image}
      />
      <styles.TextBox>
        <styles.Heading>
          <span>
            {name} TOUR
          </span>
        </styles.Heading>
        <styles.DetailsContainer>
          <styles.DetailContainer
            marginRight
          >
            <i class="far fa-clock"></i> 
            <styles.Detail>
              {days} DAYS
            </styles.Detail>
          </styles.DetailContainer>

          <styles.DetailContainer><i class="fas fa-map-marker-alt"></i>
            <styles.Detail>
              {location}
            </styles.Detail>
          </styles.DetailContainer>
        </styles.DetailsContainer>
      </styles.TextBox>
    </styles.JumboTron>
  )
}

export default JumboTron