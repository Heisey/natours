import styled from 'styled-components/macro'

export const Title = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: 700;

  background-image: linear-gradient(
    to right,
    #7dd56f,
    #28b487
  );
  letter-spacing: 0.3rem;
  line-height: 1.3;
  display: inline-block;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const FactIcon = styled.i`
  margin-right: 1.25rem;
  font-size: 2.25rem;
  color: #55c57a;
`

export const FactLabel = styled.span`
  font-weight: 700;
  margin-right: 2.25rem;
  text-transform: uppercase;
  font-size: 1.4rem;
`

export const FactData = styled.span`
  margin: 0;
  padding: 0;
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  text-transform: capitalize;
`