
import Styled from 'styled-components/macro'

interface Props {
  isOpen: boolean
}

export const Hamburger = Styled.span<Props>`
  width 3rem;
  height: 2px;
  background-color: ${props => props.isOpen ? 'transparent' : props.theme.background.primary};
  display: inline-block;
  transition: all ${props => props.isOpen ? 0.15 : 0.4}s ease-in;

  :before,
  :after {
    width: 3rem;
    height: 2px;
    background-color: ${props => props.theme.background.primary};
    content: '';
    display: inline-block;
    position: absolute;
    left: 50%;
    z-index: 2000;
  transition: all 0.3s ease-in;
  }

  :before {
    top: 2.5rem;
    top: ${props => props.isOpen ? '2.8rem' : '2.5rem'};
    transform: translateX(-50%) rotate(${props => props.isOpen ? '45deg' : 0});
  }

  :after {
    bottom: 1.8rem;
    bottom: ${props => props.isOpen ? '3rem' : '1.8rem'};
    transform: translateX(-50%) rotate(${props => props.isOpen ? '-45deg' : 0});
  }

`