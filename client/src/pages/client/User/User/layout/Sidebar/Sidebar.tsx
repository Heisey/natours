
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import * as Hooks from 'hooks'

import * as MenuItem from '../../components/MenuItem'

import * as Styles from './styles'

const Sidebar: React.FC = () => {

  const navigate = ReactRouter.useNavigate()
  const RootStore = Hooks.Common.useStore()

  const goToInfo  = () => navigate('/user/info')
  const goToSecurity = () => navigate('/user/security')

  return (
    <Styles.Sidebar>
      <ul>
        <MenuItem.Component onClick={goToInfo} path='/user/info' label='Info' />
        <MenuItem.Component onClick={goToSecurity} path='/user/security' label='security' />
        <MenuItem.Component onClick={RootStore.auth.logout} path='/user/logout' label='logout' />
      </ul>
    </Styles.Sidebar>
  )
}

export const Component = Sidebar