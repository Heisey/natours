
import Styled from 'styled-components/macro'

import * as Card from 'components/common/Cards/Card'

export const Review = Styled(Card.Component)`

  width: 100%;
  padding: 2rem;
  background-color: ${props => props.theme.background.light};

  & > :first-child {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: fit-content;
    margin-bottom: 3rem;

    & > :first-child {
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      margin-right:  1rem;
    }

    & > :last-child {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

  & > :nth-child(2) {
    font-size: 1.3rem;
    font-style: italic;
  }

  & > :last-child {
    width: fit-content;
    margin: 0 auto;
    margin-top: 3rem;
  }
`