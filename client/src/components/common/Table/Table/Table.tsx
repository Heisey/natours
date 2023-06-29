
import * as React from 'react'

import * as Styles from './styles'

interface Props {
  header: React.ReactNode
  body: React.ReactNode
}

const Table: React.FC<Props> = (props) => {

  return (
    <Styles.Table>
      {props.header}
      {props.body}
    </Styles.Table>
  )
}

export const Component = Table