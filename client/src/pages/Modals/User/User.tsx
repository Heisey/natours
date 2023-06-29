
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import * as App from 'App'
import * as Text from 'components/common/Typography/Text'
import * as Hooks from 'hooks'

import * as Ctx from './context'

import * as Styles from './styles'

const User: React.FC = () => {

  const navigate = ReactRouter.useNavigate()
  const RootStore = Hooks.Common.useStore()
  const appCtx = App.Ctx.useContext()
  const ctx = Ctx.useContext()

  const goToUserPage = () => {
    appCtx.toggleUserModal()
    navigate('/user')
  }

  const logout = async () => {
    await ctx.logout()
    appCtx.toggleUserModal()
  }

  return (
    <Styles.User>
      <div>
        <Text.Component>{RootStore.user.info.firstName}</Text.Component>
        <Text.Component>{RootStore.user.info.lastName}</Text.Component>
      </div>
      <ul>
        <li>
          <button>
            <Text.Component onClick={goToUserPage}>profile</Text.Component>
          </button>
        </li>
        <li>
          <button>
            <Text.Component onClick={logout}>logout</Text.Component>
          </button>
        </li>
        <li>
          <button>
            <Text.Component onClick={appCtx.toggleUserModal}>close</Text.Component>
          </button>
        </li>
      </ul>
    </Styles.User>
  )
}

export const Component = User