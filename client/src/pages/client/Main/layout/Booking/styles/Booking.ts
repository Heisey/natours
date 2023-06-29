
import Styled from 'styled-components/macro'

import * as Images from 'assets/images'

export const Booking = Styled.section`
  background-image: linear-gradient(
    to right bottom,
    ${props => props.theme.forest.light},
    ${props => props.theme.forest.dark}
  );

  padding: 8rem;
  margin-top: -8.2rem;

  & > div {
    background-image: url(${Images.nat10});
    background-size: cover;
    width: 75%;
    margin: 0 auto;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem ${props => props.theme.background.dark}80;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      background-color: ${props => props.theme.background.light};
      opacity: 0.8;
      transform: skew(-15deg);
      height: 100%;
      width: 60%;
      position: absolute;
      top: 0;
      left: -7rem;
    }
  }
`