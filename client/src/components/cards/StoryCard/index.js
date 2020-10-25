import React from 'react'
import assets from '../../../assets'
import styles from './styles'

const StoryCard = () => {

  return (
    <styles.StoryCard>
        <styles.CircleShape>
          <styles.Image 
            src={assets.people.personOne} 
            alt="Person on a tour"
          />
          <styles.Caption>Mary Smith</styles.Caption>
        </styles.CircleShape>
        <div class="story__text">
          <h3 class="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium accusantium accusamus a deserunt dolor sit dicta minima unde neque ipsum at dolorem magni excepturi, labore molestias fugiat quidem eum!
          </p>
        </div>
    </styles.StoryCard>
  )
}

export default StoryCard