import styled from 'styled-components/macro'

export const JumboTron = styled.div`
  position: relative;
  height: 30vw;
  clip-path: polygon(
    0 0,
    100% 0, 
    100% 80%,
    0 100%
  );
`

export const TextBox = styled.div`
  position: absolute;
  bottom: 13vw;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
`