
import Styled from 'styled-components/macro'

export const IconCard = Styled.div`
  padding: 1rem;
  padding-bottom: 0;

  box-shadow: 0 1.5rem 4rem ${props => props.theme.background.dark}40;
  min-height: 3rem;
  min-width: 20rem;

  position: relative;

  & > :first-child {
    position: absolute;
    top: 0;
    left: 2rem;

    transform: translateY(-50%);
    height: 6rem;
    width: 6rem;
    background-color: ${props => props.theme.background.primary};

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    & > :first-child {
      fill: ${props => props.theme.text.light};
    }
  }

  & > :last-child {
    margin-top: 3rem;
  }
`