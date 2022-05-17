import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import PoloBeachClub from '../sections/polo-beach-club';
import SunpowerInnovations from '../sections/sun-power-innovations';
import AccraRaceCourse from '../sections/accra-race-course';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Spartanives Website" />
          <Banner />
          <KeyFeature />
          <PoloBeachClub />
          {/* <Feature /> */}
          <SunpowerInnovations />
          {/* <CoreFeature /> */}
          <AccraRaceCourse />
          <WorkFlow />
          <Package />
          <TeamSection />
          <TestimonialCard />
        </Layout>
    </ThemeProvider>
  );
}
