import React from 'react'
import styles from './styles'

const SecondaryHeading = (props) => {

  const {
    children
  } = props

  return (
    <styles.SecondaryHeader>
      {children}
    </styles.SecondaryHeader>
  )
}

export default SecondaryHeading