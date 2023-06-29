
import Styled from 'styled-components/macro'

import * as Button from 'components/common/Buttons/Button'

export const CardBackDetails = Styled.div`
  height: 100%;
  width: 100%;

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${Button.className} {
    background-color: ${props => props.theme.snow.dark};
    text-transform: uppercase;
    white-space: nowrap;
  }

   span {
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
    color: ${props => props.theme.text.light};
  }
`