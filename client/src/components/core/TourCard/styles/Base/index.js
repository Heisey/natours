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

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.75rem;
  grid-column-gap: 2rem;
  padding: 2.5rem 3rem;
`

export const DetailContainer = styled.div`
  font-size: 1.3rem;
  display: flex;
  box-align: center;
  align-items: center;
  grid-column-start: ${props => {
    console.log(props)
    return props.start
  }};
  grid-column-end: ${props => props.end};

  i {
    margin-right: 0.7rem;
  }
`