
import * as ReactRouter from 'react-router-dom'
import Styled from 'styled-components/macro'

export const Link = Styled(ReactRouter.Link)`
  font-size: 3rem;
  color: ${props => props.theme.text.light};
  text-transform: uppercase;
  text-decoration: none;
  margin: 1rem;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in;
  outline: none;
  background-image: linear-gradient(
    120deg,
    transparent 50%,
    ${props => props.theme.background.light} 50%
  );
  background-size: 220%;

  &:hover {
    background-position: 100%;
    color: ${props => props.theme.text.primary};
    transform: translateX(1rem);
  }

`