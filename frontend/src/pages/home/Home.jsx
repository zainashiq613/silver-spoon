import React from 'react';
import WhyHireUs from '../../components/home/WhyHireUs';
import Services from '../../components/home/Services';
import Welcome from '../../components/home/Welcome';
// import TechIconsGrid from '../../components/home/Technologies';

function Home() {
  return (
    <div className="pt-25 flex flex-col gap-10">
      <Welcome />
      <WhyHireUs />
      <Services />
    </div>
  );
}

export default Home;
