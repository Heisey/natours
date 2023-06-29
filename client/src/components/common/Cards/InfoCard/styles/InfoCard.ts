
import Styled from 'styled-components/macro'

export const InfoCard = Styled.div`
  width: fit-content;
  background-color: ${props => props.theme.background.primary};
  padding: 2rem;

  width: 30rem;
  height: 30rem;

  border-radius: 15px;
  overflow: hidden;

  & > :first-child {
    & > * {
      background-color: ${props => props.theme.urban.dark};
      border-radius: 50%;
      height: 4rem;
      width: 4rem;
      display: flex;
      position: relative;

      & > svg {
        stroke: ${props => props.theme.urban.light};
        stroke-width: 2;
        filter: brightness(150%);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  & > :nth-child(2) {

    padding-top: 2rem;
    
    & > * {
      color: ${props => props.theme.text.light};
    }

    & > :first-child {
      font-size: 3rem;
      font-weight: bold;
    }

    & > :last-child {
      font-size: 2.5rem;
    }
  }

  & > :last-child {
    margin-left: -15%;
  }
`