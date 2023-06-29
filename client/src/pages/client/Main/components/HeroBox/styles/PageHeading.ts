
import styled from 'styled-components/macro'

import * as Animations from 'animations'
import * as Heading from 'components/common/Typography/Heading'

export const PageHeading = styled(Heading.Component)`
  animation-name: ${Animations.moveInLeft};
  animation-duration: 2s;
  text-transform: uppercase;
  letter-spacing: 3.5rem;
  font-size: 6rem;
`