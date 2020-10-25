import styled from "styled-components/macro";
import { linearGradientGenerator } from '../../../../utilities/helpers/linearGradientGenerator'
import assets from '../../../../assets'

export const Landing = styled.div``

export const AboutSection = styled.section`
  /* background-color: ${(props) => props.theme.colorGreyDarkOne}; */
  padding: 25rem 0;
  margin-top: -20vh;
`;

export const HeadingContainer = styled.div`
  text-align: center;
  margin-bottom: 8rem;
`

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  grid-column-gap: ${props => props.colGap ? '80px' : '0'};
  max-width: ${props => props.maxWidth ? '114rem' : '100%'};
  margin: 0 auto;
`

export const AboutSectionLeftSide = styled.div``

export const AboutSectionRightSide = styled.div``

export const FeaturesSection = styled.section`
  padding: 20rem 0;
  background-image: ${props => linearGradientGenerator(props, assets.images.tourSixCover)};
  background-size: cover;
  transform: skewY(-7deg);
  margin-top: -11rem;

  & > * {
    transform: skewY(7deg)
  }
`

export const ToursSection = styled.section`
  background-color: #f7f7f7;
  padding: 25rem 0 15rem 0;
  margin-top: -10rem;
`

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 10rem;
`

export const StoriesSection = styled.section`
  
`