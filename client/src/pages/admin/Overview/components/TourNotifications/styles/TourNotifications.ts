
import Styled from 'styled-components/macro'

export const TourNotifications = Styled.div`
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background-color: ${props => props.theme.background.primary};
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  overflow: hidden;

  & > :first-child {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;

    & > :first-child {
      font-size: 2.5rem;
      font-weight: bold;
      color: ${props => props.theme.text.light};
    }

    & > :nth-child(2) {
      display: flex;
      justify-content: space-between;

      & > * {
        display: flex;
        align-items: center;

        & > :first-child {
          & > * {
            white-space: nowrap;
            font-size: 2rem;
            color: ${props => props.theme.text.light};
          }
        }

        & > :last-child {
          fill: ${props => props.theme.background.light};
        }
      }
      & > :last-child {
        align-self: flex-end;
        justify-self: flex-end;
      }
    }

    & > :last-child {
      align-self: flex-end;
      margin-bottom: 2rem;
    }
  }

  & > :last-child {
    height: 100%;
    width: 50%;
    max-height: 30rem;
    overflow: hidden;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    & > * {
      margin-top: 8rem;
      margin-left: -7.5%;
    }
  }

`