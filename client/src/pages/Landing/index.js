import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { actions } from '../../redux'

import { Cards, Footers, Forms, Headers, Headings, Image } from "../../components";
import styles from "./styles";
import assets from '../../assets'

const Landing = (props) => {

  const {
    topTours,
    getTours
  } = props

  useEffect(() => {
    getTours()
  }, [getTours])


  return (
    <styles.Landing>

      <Headers.PrimaryHeader />

      <styles.AboutSection>
        <styles.HeadingContainer>
          <Headings.SecondaryHeading>
            Exciting tours for adventurous people
          </Headings.SecondaryHeading>
        </styles.HeadingContainer>

        <styles.SectionGrid
          cols='2'
          maxWidth
        >
          <styles.AboutSectionLeftSide>
            <Headings.TertiaryHeading>
              You're going to fall in love with nature
            </Headings.TertiaryHeading>
            <styles.Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              fugiat dolorem, odio impedit assumenda repudiandae possimus dolore
              tempora doloremque amet esse excepturi.
            </styles.Paragraph>
            <Headings.TertiaryHeading>
              Live adventures like you never have before
            </Headings.TertiaryHeading>
            <styles.Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              laboriosam soluta esse autem eligendi, possimus, nesciunt?
            </styles.Paragraph>

            <a href="#section" className="btn-text">
              Learn more &rarr;
            </a>
          </styles.AboutSectionLeftSide>

          <styles.AboutSectionRightSide>
            <Image.Composition />
          </styles.AboutSectionRightSide>
        </styles.SectionGrid>
      </styles.AboutSection>

      <styles.FeaturesSection>
        <styles.SectionGrid
          cols='4'
          maxWidth
        >
          <Cards.FeatureCard 
            heading='Explore the world'
            icon='globe'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam id maiores hic rem.
          </Cards.FeatureCard>
        
          <Cards.FeatureCard
            heading='Meet nature'
            icon='compass'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam id maiores hic rem.
          </Cards.FeatureCard>
          
          <Cards.FeatureCard
            heading='Find your way'
            icon='map'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam id maiores hic rem.
          </Cards.FeatureCard>
          
          <Cards.FeatureCard
            heading='Live a healthier life'
            icon='heart'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam id maiores hic rem.
          </Cards.FeatureCard>
        </styles.SectionGrid>
      </styles.FeaturesSection>

      <styles.ToursSection>
        <styles.HeadingContainer>
          <Headings.SecondaryHeading>
            Most popular tours
          </Headings.SecondaryHeading>
        </styles.HeadingContainer>

        <styles.SectionGrid
          cols='3'
          maxWidth
          colGap
        >
          {topTours && <>
              
              <Cards.TourFlipCard 
                tourData={topTours[0]}
                tourImage={assets.images.tourOneCover}
                color='orange'
              />

              <Cards.TourFlipCard 
                tourData={topTours[1]}
                tourImage={assets.images.tourOneCover}
                color='green'
              />

              <Cards.TourFlipCard 
                tourData={topTours[2]}
                tourImage={assets.images.tourSevenCover}
                color='blue'
              />
            </>
          }
        </styles.SectionGrid>

        <styles.ButtonContainer class="u-center-text u-margin-top-huge">
          <a href="#section-tours" class="btn btn--green">Discover all tours</a>
        </styles.ButtonContainer>
      </styles.ToursSection>

      <styles.StoriesSection>
        <styles.BackgroundVideoContainer>
          <styles.BackgroundVideo 
            autoplay 
            muted 
            loop
          >
            <source src={assets.videos.backgroundVideoMP4} type="video/mp4" />
            <source src={assets.videos.backgroundVideoWEBM} type="video/webm" />
          </styles.BackgroundVideo>
        </styles.BackgroundVideoContainer>
        <styles.HeadingContainer>
          <Headings.SecondaryHeading>
            We make people genuinely happy
          </Headings.SecondaryHeading>
        </styles.HeadingContainer>

        <styles.StoryCardContainer>
          <Cards.StoryCard 
            image={assets.people.personOne}
            name='Mary Smith'
            highlight='I had the best week ever with my family'
            quote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium accusantium accusamus a deserunt dolor sit dicta minima unde neque ipsum at dolorem magni excepturi, labore molestias fugiat quidem eum!'
          />
        </styles.StoryCardContainer>

        <styles.StoryCardContainer>
          <Cards.StoryCard 
            image={assets.people.personTwo}
            name='Jack Wilson'
            highlight='WOW! My life is completely different now'
            quote='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut placeat asperiores, fugiat molestias veritatis explicabo sequi porro corporis dicta quos excepturi reiciendis impedit facilis similique! Ducimus ex quia voluptates. Suscipit!'
          />
        </styles.StoryCardContainer>

        <styles.ButtonContainer>
          <a href="/" class="btn btn-text">Read all stories &rarr;</a>
        </styles.ButtonContainer>
      </styles.StoriesSection>

      <styles.SignupSection>
        <div className="row">
          <div className="book">
            <div className="book__form">
              <Forms.LandingSignupForm 
              
              />
            </div>
          </div>
        </div>
      </styles.SignupSection>

      <Footers.PrimaryFooter />

    </styles.Landing>
  );
};

const mapStateToProps = state => {
  if (state.tours) {
    return {
      topTours: state.tours.allTours
    }
  } else {
    return {
      tours: null
    }
  }
  
}

export default connect(mapStateToProps, {
  getTours: actions.getTopThreeTours
})(Landing)
