
import * as React from 'react'

import * as SectionTitle from '../../components/SectionTitle'

import * as LeftColumn from './components/LeftColumn'
import * as RightColumn from './components/RightColumn'
import * as Styles from './styles'

export const About: React.FC = () => {

  return (
    <Styles.About>
      <SectionTitle.Component>
        Exiting tours for adventurous people
      </SectionTitle.Component>
      <Styles.Columns>
        <LeftColumn.Component />
        <RightColumn.Component />
      </Styles.Columns>
    </Styles.About>
  )
}

export const Component = About