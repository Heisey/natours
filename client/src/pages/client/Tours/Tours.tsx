
import * as React from 'react'

import * as TemplatePage from 'templates/Page'

import * as ToursCtx from './context'
// import * as Filters from './layout/Filters'
import * as Main from './layout/Main'

import * as Styles from './styles'

const Tours: React.FC = () => {

  const toursCtx = ToursCtx.useContext()

  return (
    <TemplatePage.Component>
      <Styles.Tours>
        {/* <Filters.Component /> */}
        {toursCtx.tours && <Main.Component />}
        {!toursCtx.tours && <div>loading</div>}
      </Styles.Tours>
    </TemplatePage.Component>
  )
}

export const Component = Tours