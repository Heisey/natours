import React from 'react'
import styles from './styles'
import { Headings } from '../../'

const FeatureCard = (props) => {

  const {
    children,
    heading,
    icon
  } = props
  
  return (
    <styles.FeatureCard>
        <styles.Icon className={`fas fa-${icon}`}></styles.Icon>
        <Headings.TertiaryHeading>
          {heading}
        </Headings.TertiaryHeading>
        <styles.Text>
          {children}
        </styles.Text>
    </styles.FeatureCard>
  )
}

export default FeatureCard