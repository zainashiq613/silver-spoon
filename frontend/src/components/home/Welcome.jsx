import React from 'react';

function Welcome() {
  return (
    <div>
      <section className="px-[150px] grid grid-cols-2 gap-15">
        <div className="flex items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-bold text-4xl">Welcome to TechTri</h2>
            <p className="text-xl font-medium">Pakistan's largest cybersecurity community!</p>
            <p className="text-base">
              We are a vibrant student community passionate about fostering collaboration and
              equipping fellow students with opportunities to stay updated on the latest tech
              trends. With a focus on cybersecurity and exploring its vast potential, we aim to
              empower students across Pakistan to shape a secure digital future together.
            </p>
          </div>
        </div>
        <div style={{ transitionDelay: '200ms' }}>
          <div>
            <video
              src="/tech tri.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl"
              aria-label="TechTri"
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
