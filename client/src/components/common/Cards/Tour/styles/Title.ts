
import Styled from 'styled-components/macro'

import * as Heading from 'components/common/Typography/Heading'
import * as Server_Tours from 'server/Tours'
import * as Utils_Style from 'utils/Styles'

interface Props {
  environment: Server_Tours.Models.Environment
}


export const Title = Styled(Heading.Component)<Props>`
  font-size: 2.8rem;
  text-transform: uppercase;
  position: absolute;
  top: 12rem;
  right: 2rem;
  text-align: right;
  color: ${props => props.theme.text.light};
  max-width: 65%;
  
  span {
    box-decoration-break: clone;
    padding: 1rem 1.5rem;
    background-image: linear-gradient(
      to right bottom,
      ${props => Utils_Style.generateLinearColor({ ...props, variant: 'light' })}95,
      ${props => Utils_Style.generateLinearColor({ ...props, variant: 'dark' })}95
    );
  }
`