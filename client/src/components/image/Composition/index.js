import React from 'react'
import styles from './styles'
import assets from '../../../assets'

const Composition = () => {

  return (
    <styles.Composition>
      <styles.PhotoOne 
        src={assets.images.tourNineCover}
      />
      <styles.PhotoTwo 
        src={assets.images.tourOneCover}
      />
      <styles.PhotoThree 
        src={assets.images.tourSevenCover}
      />
    </styles.Composition>
  )
}

export default Composition