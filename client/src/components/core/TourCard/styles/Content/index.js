import styled from 'styled-components/macro'

export const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right bottom,
    #7dd56f,
    #28b487
  );
  opacity: 0.7;
`

export const CardImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`