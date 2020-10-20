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

export const SubHeading = styled.h4`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  grid-column-start: 1;
  grid-column-end: -1;
`

export const TourDescription = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 1.5rem;
  font-style: italic;
  margin-top: -1rem;
  margin-bottom: 0.75rem;
`

export const TourDetail = styled.div`
  font-size: 1.3rem;
  display: flex;
  box-align: center;
  align-items: center;
`