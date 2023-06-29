
import Styled from 'styled-components/macro'

interface Props {
  error?: boolean
}

export const Password = Styled.div<Props>`
  position: relative;
  height: fit-content;

  input {
    font-size: 1.5rem;
    padding: 0.7rem 0;
    border-radius: 2px;
    background-color: ${props => props.theme.background.light}50;
    border: none;
    border-bottom: 5px solid transparent;
    color: ${props => props.theme.background.primary};
    transition: all 0.3s ease-in;
    
    &:focus {
      outline: none;
      border-bottom: 5px solid ${props => props.theme.background.primary};
      box-shadow: 0 1rem 2rem ${props => props.theme.background.dark}40;
    padding: 0.7rem 1.2rem;
    }

    &:focus:invalid {
      border-bottom: 5px solid ${props => props.theme.background.danger};
    }

    &:placeholder {
      color: ${props => props.theme.background.grey};
    }
  }

  label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: 1.2rem;
    display: block;
    transition: all 0.3s ease-in;
  }

  input:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }

  & > :last-child {
    visibility: ${props => props.error ? 'visible' : 'hidden'};
    position: absolute;
    bottom: -0.8rem;
    /* margin-top: -1rem; */
    z-index: 1000;
    left: 1.21rem;
  }
`