
import * as React from 'react'

import * as Icons from 'assets/icons'
import * as Overlay from 'components/common/Layout/Overlay'

import * as Card from './components/Card'
import * as Styles from './styles'

const Feature: React.FC = () => {

  return (
    <Styles.Feature>
      <Overlay.Component index={60} />
      <Styles.CardContainer>
        <Card.Component 
          icon={<Icons.Outline.Globe size='65' />}
          title='EXPLORE THE WORLD'
          message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.'
        />
        <Card.Component 
          icon={<Icons.Outline.Compass size='65' />}
          title='MEET NATURE'
          message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.'
        />
        <Card.Component 
          icon={<Icons.Outline.Map size='65' />}
          title='FIND YOUR WAY'
          message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.'
        />
        <Card.Component 
          icon={<Icons.Outline.Heart size='65' />}
          title='LIVE A HEALTHIER LIFE'
          message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.'
        />
      </Styles.CardContainer>
      
    </Styles.Feature>
  )
}

export const Component = Feature