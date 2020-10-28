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
  position: relative;
  padding: 15rem 0;
`

export const StoryCardContainer = styled.div`
  margin-bottom: 8rem;
`

export const BackgroundVideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: .15;
  overflow: hidden;
`

export const SignupSection = styled.section`
  max-width: 114rem;
  margin: 0 auto;
  padding: 15rem 0;
`

export const SignupContentContainer = styled.div`
  background-image: linear-gradient(
      105deg, 
      rgba(255, 255, 255, .9) 0%,
      rgba(255, 255, 255, .9) 50%,
      transparent 50%
    ), 
    url(${props => props.backgroundImage});
  background-size: 100%; 
  border-radius: 5px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .2);

  height: 50rem;
`

export const SignupFormContainer = styled.div`
  width: 50%;
  padding: 6rem;
`