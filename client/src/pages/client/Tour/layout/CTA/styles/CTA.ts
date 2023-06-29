
import Styled from 'styled-components/macro'

export const CTA = Styled.div`
  height: 40vh;

  display: flex;
  align-items: center;
  justify-content: center;

  /* Card Styles */
  & > :first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;

    /* Card Images */
    & > :first-child {
      position: relative;
      width: 20rem;
      height: 12rem;

      & > * {
        position: absolute;
        height: 10rem;
        width: 10rem;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
      }

      & > :nth-child(1) {
        left: 8rem;
      }

      & > :nth-child(2) {
        left: 4rem;
      }

      & > :nth-child(3) {
        left: 0rem;
      }
    }

    /* Card Text */
    & > :nth-child(2) {
      text-align: center;

      & > :first-child {
        color: ${props => props.theme.text.primary};
        font-size: 3rem;
        font-weight: bold;
      }

      & > :last-child {
        font-size: 1.5rem;
      }
    }
  }
`