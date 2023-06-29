
import * as React from 'react'

import * as Link from '../../components/Link'
import * as Ctx_App from '../../context'

import * as Styles from './styles'

const links = [
  { text: 'Home', link: '/' },
  { text: 'About Natours', link: 'about' },
  { text: 'Your Benefits', link: 'benefits' },
  { text: 'Browse Tours', link: 'tours' },
  { text: 'Stories', link: 'stories' },
  { text: 'Contact Us', link: 'contact' }
]

const Nav: React.FC = () => {

  const AppCtx = Ctx_App.useContext()

  return (
    <Styles.Nav
      isOpen={AppCtx.navOpen}
    >
      <ul>
        {links.map((dataSet, index) => (
          <li 
            key={index}
            onClick={AppCtx.toggleNav}
          >
            <Link.Component to={dataSet.link}>
              {`0${index + 1} ${dataSet.text}`}
            </Link.Component>
          </li>
        ))}
      </ul>
    </Styles.Nav>
  )
}

export const Component = Nav