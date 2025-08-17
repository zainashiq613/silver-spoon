import React from 'react';
import AboutCards from '../../components/about/AboutCards';
import OurStory from '../../components/about/OurStory';
import TechIconsGrid from '../../components/home/Technologies';
import Title from '../../components/shared/Title';
import CompanyStepper from '../../components/shared/CompanyStepper';

function About() {
  return (
    <div className="pt-35 pb-20 flex flex-col gap-10">
      <AboutCards />
      <OurStory />
      <Title section="Process" title="Our" spanText="Work Approach" />

      <CompanyStepper />
      <Title
        section={"Technologies"}
        title={"Our"}
        spanText={"Tech Approach"}
      />
      <TechIconsGrid />
    </div>
  );
}

export default About;
