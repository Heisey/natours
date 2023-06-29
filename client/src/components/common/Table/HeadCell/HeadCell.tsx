
import * as React from 'react'

import * as Styles from './styles'

interface Props extends React.PropsWithChildren {}

const HeadCell: React.FC<Props> = (props) => {

  return (
    <Styles.HeadCell>
      {props.children}
    </Styles.HeadCell>
  )
}

export const Component = HeadCell