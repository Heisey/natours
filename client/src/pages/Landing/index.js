import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { actions } from '../../redux'

import { Cards, Headers, Headings, Image } from "../../components";
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

  console.log(topTours ? topTours[0] : 'puppies')

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
              <Cards.TourCard 
                tourData={topTours[0]}
                tourImage={assets.images.tourSixCover}
              />

              <Cards.TourCard 
                tourData={topTours[1]}
                tourImage={assets.images.tourOneCover}
              />

              <Cards.TourCard 
                tourData={topTours[2]}
                tourImage={assets.images.tourSevenCover}
              />
            </>
          }
        </styles.SectionGrid>

        {/* <div class="row">
          <div class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                
                <div class="card__picture card__picture--1">
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--1">
                    The Sea Explorer
                  </span>

                </h4>
                <div class="card__details">
                  <ul>
                    <li>3 day tour</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hostels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-only">Only</p>
                    <p class="card__price-value">$297</p>
                  </div>
                  <a href="#popup" class="btn btn--white">Book now!</a>
                </div>
              </div>
            </div>
          </div> */}
          
          
          {/* <div class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <!-- don't nest elements in BEM convention i.e. this is not card__side__picture, just card__picture
                also since we have 3 cards, we need a modifier for each one card__picture--1 etc-->
                <div class="card__picture card__picture--2">
                  <!-- this is just a space. the image will be applied via CSS rather than markup, so we need the space so that we can see the element -->
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--2">
                    The Forest Hiker
                  </span>

                </h4>
                <div class="card__details">
                  <ul>
                    <li>7 day tour</li>
                    <li>Up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-2">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-only">Only</p>
                    <p class="card__price-value">$497</p>
                  </div>
                  <a href="#popup" class="btn btn--white">Book now!</a>
                </div>
              </div>
            </div>
          </div> */}
          
          
          {/* <div class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <!-- don't nest elements in BEM convention i.e. this is not card__side__picture, just card__picture
                also since we have 3 cards, we need a modifier for each one card__picture--1 etc-->
                <div class="card__picture card__picture--3">
                  <!-- this is just a space. the image will be applied via CSS rather than markup, so we need the space so that we can see the element -->
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--3">
                    The Snow Adventurer
                  </span>

                </h4>
                <div class="card__details">
                  <ul>
                    <li>5 day tour</li>
                    <li>Up to 15 people</li>
                    <li>3 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: hard</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-3">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-only">Only</p>
                    <p class="card__price-value">$897</p>
                  </div>
                  <a href="#popup" class="btn btn--white">Book now!</a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div class="u-center-text u-margin-top-huge">
          <a href="#section-tours" class="btn btn--green">Discover all tours</a>
        </div> */}
      </styles.ToursSection>

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
