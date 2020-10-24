import styled from 'styled-components/macro'

export const JumboTron = styled.div`
  position: relative;
  height: 40vw;
  clip-path: polygon(
    0 0,
    100% 0, 
    100% 75%,
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

export const DetailsContainer = styled.div`
  color: #f7f7f7;
  margin-top: 3rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`

export const DetailContainer = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.15);
  margin-right: ${props => props.marginRight ? '4rem' : 0};
`