import React from 'react'
import assets from '../../../assets'
import styles from './styles'
import { Headings } from '../../'

const StoryCard = (props) => {

  const {
    highlight,
    image,
    name,
    quote
  } = props

  return (
    <styles.StoryCard>
        <styles.CircleShape>
          <styles.Image 
            src={image} 
            alt="Person on a tour"
          />
          <styles.Caption>{name}</styles.Caption>
        </styles.CircleShape>
        <styles.TextContainer>
          <Headings.TertiaryHeading>
            {highlight}
          </Headings.TertiaryHeading>
          <p>
            {quote}
          </p>
        </styles.TextContainer>
    </styles.StoryCard>
  )
}

export default StoryCard