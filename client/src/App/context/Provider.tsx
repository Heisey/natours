
import * as MxReact from 'mobx-react'
import * as React from 'react'

import * as Core from 'core'
import * as Hooks from 'hooks'
import * as Service_Firebase from 'services/firebase'

import * as CtxApp from './'

const Provider: React.FC<Core.Models.Provider> = (props) => {
  const RootState = Hooks.Common.useStore()

  const [navOpen, navOpenHandler] = React.useState(false);
  const [loginModalOpen, loginModalOpenHandler] = React.useState(false)
  const [userModalOpen, userModalOpenHandler] = React.useState(false)
  const [loadingOverlay, loadingOverlayHandler] = React.useState(false)

  const toggleNav = () => navOpenHandler(!navOpen)

  const toggleLoginModal = () => loginModalOpenHandler(!loginModalOpen)
  const toggleUserModal = () => userModalOpenHandler(!userModalOpen)
  // const toggleLoadingOverlay = () => loadingOverlayHandler(!loadingOverlay)

  const closeLoginModal = () => loginModalOpenHandler(false)

  React.useEffect(() => {
    const observerArgs = {
      isAuth: RootState.auth.isAuthorized,
      token: RootState.auth.token,
      setIsAuth: RootState.auth.setIsAuthorized,
      setToken: RootState.auth.setToken,
      setEmail: RootState.user.setInfoEmail,
      login: RootState.user.refresh
    }
    Service_Firebase.observer(observerArgs)
  })

  return (
    <CtxApp.Context.Provider
      value={{
        navOpen,
        toggleNav,

        loginModalOpen,
        toggleLoginModal,
        closeLoginModal,

        userModalOpen,
        toggleUserModal,

        loadingOverlay,
        setLoadingOverlay: loadingOverlayHandler
      }}
    >
      {props.children}
    </CtxApp.Context.Provider>
  )
}

export const Component = MxReact.observer(Provider)