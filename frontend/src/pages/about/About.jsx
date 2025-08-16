import React from 'react';
import AboutCards from '../../components/about/AboutCards';
import OurStory from '../../components/about/OurStory';
import TechIconsGrid from '../../components/home/Technologies';
import Title from '../../components/shared/Title';

function About() {
  return (
    <div className="pt-25 flex flex-col gap-10">
      <AboutCards />
      <OurStory />
      <Title section={'Technologies'} title={'Technologies'} spanText={'We Use'} />
      <TechIconsGrid />
    </div>
  );
}

export default About;
