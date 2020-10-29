import styled from 'styled-components/macro'

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  object-position: 50% 25%;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.85;
  background-image: linear-gradient(
    to right bottom,
    #7dd56f,
    #28b487
  );
`

export const Heading = styled.div`
  font-size: 5rem;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  color: white;

  span {
    padding: 1rem 1.5rem;
    line-height: 1;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to right bottom,
      rgba(125, 213, 111, 0.85),
      rgba(40, 180, 135, 0.85)
    );
  }
`

export const Detail = styled.span`
  margin-left: 0.8rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`