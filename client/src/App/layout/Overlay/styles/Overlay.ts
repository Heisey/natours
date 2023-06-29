
import Styled from 'styled-components/macro'

export const Overlay = Styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 100000000000000;
  background-color: pink;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`