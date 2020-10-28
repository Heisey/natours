import styled from 'styled-components/macro'

export const Logo = styled.img`
  width: 15rem;
  height: auto;
`

export const Navigation = styled.nav`
  border-top: 1px solid $color-grey-light-2;
  padding-top: 2rem;
  display: inline-block;
`

export const ListItem = styled.li`
  display: inline-block;
  margin-right: ${props => props.last ? '1.5rem' : '0'};
`