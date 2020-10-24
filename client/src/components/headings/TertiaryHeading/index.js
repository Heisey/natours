import React from 'react'
import styles from './styles'

const TertiaryHeading = (props) => {

  const { children } = props
  return (
    <styles.TertiaryHeading>
      {children}
    </styles.TertiaryHeading>
  )
}

export default TertiaryHeading