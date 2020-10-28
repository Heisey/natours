import React from 'react'
import styles from './styles'

const Label = (props) => {
  
  const {
    children,
    labelFor
  } = props

  return (
    <styles.Label 
      htmlFor={labelFor}
    >
      {children}
    </styles.Label>
  )
}

export default Label