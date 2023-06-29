
import * as MxReact from 'mobx-react'
import * as React from 'react'

import * as Overlay from 'components/common/Layout/Overlay'

import * as HeroBox from '../../components/HeroBox'
import * as Styles from './styles'

const Header: React.FC = () => {

  return (
    <Styles.Header>
      <Overlay.Component />
      <Styles.HeaderLogo />
      <HeroBox.Component />
    </Styles.Header>
  )
}

export const Component = MxReact.observer(Header)