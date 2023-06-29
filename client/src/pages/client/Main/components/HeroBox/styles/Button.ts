
import Styled from 'styled-components/macro'

import * as Animations from 'animations'
import * as AnimatedButton from 'components/common/Buttons/Animated'

export const Button = Styled(AnimatedButton.Component)`
  margin: 0 auto;
  margin-top: 10%;
  animation-name: ${Animations.moveInUp};
  animation-duration: 2s;
  animation-fill-mode: backwards;
`