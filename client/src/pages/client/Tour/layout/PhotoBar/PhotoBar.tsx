
import * as React from 'react'

import * as Images from 'assets/images'
import * as Image from 'components/common/Images/Image'

import * as Styles from './styles'

const PhotoBar: React.FC = () => {

  return (
    <Styles.PhotoBar>
      <Image.Component src={Images.nat1Large} />
      <Image.Component src={Images.nat2Large} />
      <Image.Component src={Images.nat3Large} />
    </Styles.PhotoBar>
  )
}

export const Component = PhotoBar