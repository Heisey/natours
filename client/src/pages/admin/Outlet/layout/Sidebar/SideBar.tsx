
import * as React from 'react'

import * as Icons from 'assets/icons'
import * as Images from 'assets/images'
import * as MenuDropdown from 'components/common/Buttons/MenuDropdown'
import * as MenuButton from 'components/common/Buttons/MenuButton'
import * as Image from 'components/common/Images/Image'
import * as Heading from 'components/common/Typography/Heading'

import * as Styles from './styles'

const SideBar: React.FC = () => {

  const menuOptions = [
    {label: 'tours', icon: <Icons.Outline.Globe size='30' />, path: '/admin/tours' },
    {label: 'usage', icon: <Icons.Outline.Globe size='30' />, path: '/admin/usage' }
  ]

  const groupNav: MenuDropdown.Props = {
    buttonData: { label: 'guides', icon: <Icons.Outline.Globe size='30' />, path: '/admin/guides' },
    options: [
      { label: 'create', icon: <div></div>, path: '/admin/guides/create' },
      { label: 'manage', icon: <div></div>, path: '/admin/guides/manage' }
    ]
  }

  return (
    <Styles.SideBar>
      <div>
        <Image.Component src={Images.logo_white} />
        <Heading.Component>
          Natours
        </Heading.Component>
      </div>
      <ul>
        <MenuButton.Component label='home' icon={<Icons.Outline.GameController size='30' />} path='/admin' />
        <MenuDropdown.Component {...groupNav} />
        {menuOptions.map(dataSet => <MenuButton.Component key={Math.random()} {...dataSet} />)}
      </ul>
    </Styles.SideBar>
  )
}

export const Component = SideBar