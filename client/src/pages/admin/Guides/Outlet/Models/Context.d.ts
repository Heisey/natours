
import * as Server_User from 'server/User'

import * as Guides_Models from './'

export interface Context {
  guides: Server_User.Models.Guide[]

  slide: Guides_Models.Slides
  updateSlide: (slide: Guides_Models.Slides) => void
}