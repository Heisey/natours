
import * as React from 'react'

import * as TemplatePage from 'templates/Page'

import * as CTA from './layout/CTA'
import * as Header from './layout/Header'
import * as Information from './layout/Information'
// import * as Map from './layout/Map'
import * as PhotoBar from './layout/PhotoBar'
import * as Reviews from './layout/Reviews'

const Tours: React.FC = () => {

  return (
    <TemplatePage.Component>
      <Header.Component />
      <Information.Component />
      <PhotoBar.Component />
      {/* <Map.Component /> */}
      <Reviews.Component />
      <CTA.Component />
    </TemplatePage.Component>
  )
}

export const Component = Tours