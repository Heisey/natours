import React from "react";

import { Headers } from "../../components";
import styles from "./styles";

const Landing = () => {
  return (
    <div>
      <Headers.PrimaryHeader />
      <styles.AboutSection>
        <styles.AboutHeaderContainer>
          <styles.SecondaryHeading>
            Exciting tours for adventurous people
          </styles.SecondaryHeading>
        </styles.AboutHeaderContainer>

        <styles.AboutSectionGrid>
          <styles.AboutSectionLeftSide className="col-1-of-2">
            <styles.TertiaryHeading>
              You're going to fall in love with nature
            </styles.TertiaryHeading>
            <styles.Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              fugiat dolorem, odio impedit assumenda repudiandae possimus dolore
              tempora doloremque amet esse excepturi.
            </styles.Paragraph>
            <styles.TertiaryHeading>
              Live adventures like you never have before
            </styles.TertiaryHeading>
            <styles.Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              laboriosam soluta esse autem eligendi, possimus, nesciunt?
            </styles.Paragraph>

            <a href="#section" className="btn-text">
              Learn more &rarr;
            </a>
          </styles.AboutSectionLeftSide>

          <styles.AboutSectionRightSide className="col-1-of-2">
            <div className="composition">
              <img
                src="img/nat-1-large.jpg"
                alt="bob"
                className="composition__photo composition__photo--p1"
              />
              <img
                src="img/nat-2-large.jpg"
                alt="jeff"
                className="composition__photo composition__photo--p2"
              />
              <img
                src="img/nat-3-large.jpg"
                alt="karl"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </styles.AboutSectionRightSide>
        </styles.AboutSectionGrid>
      </styles.AboutSection>
    </div>
  );
};

export default Landing;
