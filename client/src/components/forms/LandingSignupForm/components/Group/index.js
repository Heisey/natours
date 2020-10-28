import React from 'react'
import styles from './styles'

const Group = props => {

  const {
    children,
    last
  } = props

  return (
    <styles.FormGroup
      last={last}
    >
      {children}
    </styles.FormGroup>
  )
}

export default Group