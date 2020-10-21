import React from 'react'
import styles from './styles'
import { Heading } from './styles/Content'



const JumboTron = (props) => {

  
  const {
    image,
    name
  } = props
  
  return (
    <styles.JumboTron>
      <styles.Overlay />
      <styles.Image 
        src={image}
      />
      <styles.TextBox>
        <Heading>
          <span>
            {name} TOUR
          </span>
        </Heading>
      </styles.TextBox>
    </styles.JumboTron>
  )
}

export default JumboTron