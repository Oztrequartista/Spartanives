/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Entertainment",
    title: "Entertainment",
    text:
      `We focus on actively investing large scale entertainment, leisure, hospitality, 
      medium to large scale real estate, renewable energy, and other strategic 
      projects across Ghana`,
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Financial",
    title: "Financial",
    text:
    `Spartan Ives aims to create financial value by directly investing equity into 
    our portfolio companies or debt in partnership with investment partners 
    around the world using patient capital as well restructuring operations of 
    the invested assets to extract value`,
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Hospitality",
    title: "Hospitality",
    text:
    `Ghana’s hospitality space is under-served by traditional financial institutions 
    and Spartan Ives’ strategy is to fill this gap. Our most compelling reason is 
    the impact our investments have on the wellbeing of our planet and how 
    economic development can work hand in hand with sustaining the 
    environment`,
  },

];

export default function KeyFeature() {
  return (
    <section id="strategies" sx={{ variant: "section.keyFeature" }}>
      <Container>
        <SectionHeader
          slogan=""
          title="Our Strategy"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => {
            const { id, imgSrc, altText, title, text } = item;
            return (
              <FeatureCardColumn
                key={id}
                src={imgSrc}
                alt={altText}
                title={title}
                text={text}
              />
            );
          })}
        </Grid> 
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
