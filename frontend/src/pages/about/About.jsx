import React from 'react';
import AboutCards from '../../components/about/AboutCards';
import OurStory from '../../components/about/OurStory';
import TechIconsGrid from '../../components/home/Technologies';

function About() {
  return (
    <div className="pt-25 flex flex-col gap-10">
      <AboutCards />
      <OurStory />
      <TechIconsGrid />
    </div>
  );
}

export default About;
