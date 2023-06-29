
import * as React from 'react'

import * as Styles from './styles'

interface Props extends React.PropsWithChildren {}

const SectionTitle: React.FC<Props> = (props) => {

  return (
    <Styles.SectionTitle>
      <Styles.Title
        variant='h2'
        bold
      >
        {props.children}
      </Styles.Title>
    </Styles.SectionTitle>
  )
}

export const Component = SectionTitle