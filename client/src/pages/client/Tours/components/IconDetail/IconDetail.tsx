
import * as React from 'react'

import * as Text from 'components/common/Typography/Text'

import * as Styles from './styles'

interface Props {
  icon: React.ReactNode
  label: string | number
}

const IconDetail: React.FC<Props> = (props) => {

  return (
    <Styles.IconDetails>
      {props.icon}
      <Text.Component>{props.label}</Text.Component>
    </Styles.IconDetails>
  )
}

export const Component = IconDetail