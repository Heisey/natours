import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './styles'
import {actions} from '../../../redux'

import logo from '../../../assets/images/logo-white.png'

const SecondaryHeader = (props) => {

  const {
    getAllTours
  } = props

  useEffect(() => {
    getAllTours()
  })

  return (
    <styles.SecondaryHeader>
      <styles.Logo 
        src={logo}
      />
      <styles.ButtonContainer>
        <span>LOG IN</span>
        <span>SIGN UP</span>
      </styles.ButtonContainer>
    </styles.SecondaryHeader>
  )
}

export default connect(null, {
  getAllTours: actions.getAllTours
})(SecondaryHeader)