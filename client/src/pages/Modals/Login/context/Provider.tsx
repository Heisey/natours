
import * as MxReact from 'mobx-react'
import * as React from 'react'

import * as Hooks from 'hooks'

import * as Server_User from 'server/User'
import * as Store_Auth from 'store/Auth'

import * as C_Login from '../config'
import * as M_Login from '../Models'

import * as CtxLogin from './'

interface Props extends React.PropsWithChildren {}

const Provider: React.FC<Props> = (props) => {

  const GlobalStore = Hooks.Common.useStore()

  const [page, pageHandler] = React.useState<M_Login.Page>(C_Login.Page.Login)
  const [loginEmail, loginEmailHandler] = React.useState<string | undefined>(undefined)
  const [userData, userDataHandler] = React.useState<Server_User.Models.Info>({} as Server_User.Models.Info)
  const [userPreferences, userPreferencesHandler] = React.useState<M_Login.Preferences>(C_Login.Preferences)
  const [password, passwordHandler] = React.useState('')

  const updatePassword = (updatedPassword: string) => passwordHandler(updatedPassword)

  const updatePage = (page: M_Login.Page) => pageHandler(page)

  const updateLoginEmail = (email?: string) => loginEmailHandler(email)

  const updateUserData = (data: Server_User.Models.Info) => userDataHandler({ ...userData, ...data })

  const updateUserPreferences = (preferences: M_Login.Preferences) => userPreferencesHandler(preferences)
  
  const createUser = async () => {
    const token = await GlobalStore.auth.create({ email: userData.email, password })
    
    if (!token) return
    
    const credentials: Server_User.Models.Credentials = {
      active: true,
      role: 'user'
    }

    const serverResponse = await GlobalStore.user.createUser({ info: userData, credentials })

    await GlobalStore.auth.setGlobalUser({ token, isAuthorized: true })

    if (!serverResponse) return
    
    GlobalStore.user.setInfo(serverResponse.info)
  }

  const doesUserExist = async (email: string) => await Server_User.api.Self.doesUserExist(email)

  const loginUser = async (args: Store_Auth.Models.LoginArgs) => {
    await GlobalStore.auth.login(args)

    await GlobalStore.user.login(args.email)
  }

  return (
    <CtxLogin.Context.Provider
      value={{
        page,
        updatePage,

        loginEmail,
        updateLoginEmail,
        updatePassword,

        userData,
        updateUserData,

        userPreferences,
        updateUserPreferences,

        createUser,
        loginUser,
        doesUserExist
      }}
    >
      {props.children}
    </CtxLogin.Context.Provider>
  )
}

export const Component = MxReact.observer(Provider)