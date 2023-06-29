
import Styled from 'styled-components/macro'

import * as Text from 'components/common/Typography/Text'

export const Price = Styled(Text.Component)`
  font-size: 6rem;
  color: ${props => props.theme.text.light};
`