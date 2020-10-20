import styled from 'styled-components/macro'

export const TourCard = styled.div`
   border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: all 0.3s;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  position: relative;
`

export const ImageContainer = styled.div`
  position: relative;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 83%,
    0 98%
  );
  height: 27rem;
`