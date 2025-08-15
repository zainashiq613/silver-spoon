import React from 'react';

function Welcome() {
  return (
    <div>
      <section className="hero px-[150px] grid grid-cols-2 gap-15">
        <div className="hero-content reveal">
          <h2 className="main-heading">Welcome to TechTri</h2>
          <p className="sub-heading">Pakistan's largest cybersecurity community!</p>
          <p className="description">
            We are a vibrant student community passionate about fostering collaboration and
            equipping fellow students with opportunities to stay updated on the latest tech trends.
            With a focus on cybersecurity and exploring its vast potential, we aim to empower
            students across Pakistan to shape a secure digital future together.
          </p>
        </div>
        <div className="border image-gallery reveal" style={{ transitionDelay: '200ms' }}>
          <div className="image-container">
            <video
              src="hero-animation.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Tech Hierarchy Community Animation"
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
