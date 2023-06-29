
import * as React from 'react'

import * as Images from 'assets/images'
import * as Image from 'components/common/Images/Image'
import * as Text from 'components/common/Typography/Text'

import * as Styles from './styles'

const Header: React.FC = () => {

  return (
    <Styles.Header>
      
      <div>
        <Text.Component>Archie Puppy</Text.Component>
        <Image.Component src={Images.nat8} />
      </div>
    </Styles.Header>
  )
}

export const Component = Header