import React from 'react';
import WhyHireUs from '../../components/home/WhyHireUs';
import Services from '../../components/home/Services';
import Welcome from '../../components/home/Welcome';
import Title from '../../components/shared/Title';
import Button from '../../components/shared/Button';
// import TechIconsGrid from '../../components/home/Technologies';

function Home() {
  return (
    <div className="pt-40 flex flex-col gap-10 mb-20">
      <Welcome />
      <Title
        id={'process'}
        section={'Services'}
        title={'Our'}
        spanText={'Services'}
        desc={'From concept to execution, see how we bring ideas to life in your business'}
      />
      <Services />
      <Title section={'Send Us a Message'} />
      <WhyHireUs />
    </div>
  );
}

export default Home;
