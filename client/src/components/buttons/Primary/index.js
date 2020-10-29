import React from 'react'
import styles from './styles'

const Primary = (props) => {
  const {
    children,
    color,
    to
  } = props
  return (
    <styles.Primary 
      color={color}
      to={to} 
    >
      {children}
    </styles.Primary>
  )
}

export default Primary