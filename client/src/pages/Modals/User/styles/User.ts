
import Styled from 'styled-components/macro'

export const User = Styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 150;

  background-color: ${props => props.theme.background.light};

  & > :first-child {
    display: flex;
    color: ${props => props.theme.text.primary};
    font-size: 4rem;
    width: fit-content;
    margin: 0 auto;

    & > * {
      text-transform: capitalize;
      padding: 1rem;
    }

    & > :last-child {
      margin-left: 1rem;
    }
  }

  & > ul {
    background-color: pink;

    & > li {
      background-color: lime;
      /* display: block;
      vertical-align: bottom; */
      line-height: 0;

      & > button {
        background-color: ${props => props.theme.background.light};
        width: 100%;
        border: none;
        padding: 1rem 0;
        font-size: 2rem;
        text-transform: capitalize;
        transition: all 0.3s ease-in;

        &:hover {
          background-color: ${props => props.theme.background.primary};
        }
      }
    }
  }
`