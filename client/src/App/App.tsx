
import * as MxReact from 'mobx-react'
import * as React from 'react'

// import * as MODAL_LOGIN from 'pages/Modals/Login'
// import * as MODAL_USER from 'pages/Modals/User'
import * as Router from 'Router'

import * as Ctx_App from './context'
import * as Footer from './layout/Footer'
import * as Header from './layout/Header'
import * as Nav from './layout/Nav'
import * as Overlay from './layout/Overlay'

import * as Styles from './styles'

const App: React.FC = () => {

  const AppCtx = Ctx_App.useContext()

  return (
    <Styles.App>
      {/* {AppCtx.loginModalOpen && <MODAL_LOGIN.Component />} */}
      {/* {AppCtx.userModalOpen && <MODAL_USER.Component />} */}
      
      {AppCtx.loadingOverlay && <Overlay.Component />}
      <Header.Component />
      <Nav.Component />
      <Router.Component />
      <Footer.Component />
    </Styles.App>
  );
}

export const Component = MxReact.observer(App);
