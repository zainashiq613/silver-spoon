import React from 'react';

function Welcome() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/tech-tri.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay to improve text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Foreground Content */}
      <section className="relative z-10 px-[150px] grid grid-cols-2 gap-10 h-full items-center text-white">
        {/* Left Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-primary font-bold text-4xl">Welcome to TechTri</h2>
          <p className="text-xl font-medium">Pakistan's largest cybersecurity community!</p>
          <p className="text-base max-w-lg">
            We are a vibrant student community passionate about fostering collaboration and
            equipping fellow students with opportunities to stay updated on the latest tech trends.
            With a focus on cybersecurity and exploring its vast potential, we aim to empower
            students across Pakistan to shape a secure digital future together.
          </p>
        </div>

        {/* Right Content (inline video) */}
        <div className="flex justify-center">
          <video
            src="/tech-tri.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-lg max-w-md"
            aria-label="TechTri promo"
          ></video>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
