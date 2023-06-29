
import styled from 'styled-components/macro'

import * as Animations from 'animations'
import * as Text from 'components/common/Typography/Text'

export const PageSubHeading = styled(Text.Component)`
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  display: block;
  letter-spacing: 1.7rem;
  animation-name: ${Animations.moveInRight};
  animation-duration: 2s;
`