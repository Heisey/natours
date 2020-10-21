import React from 'react'
import styles from './styles'



const JumboTron = (props) => {

  
  const {
    image
  } = props
  
  return (
    <styles.JumboTron>
      <styles.Image 
        src={image}
      />
    </styles.JumboTron>
  )
}

export default JumboTron