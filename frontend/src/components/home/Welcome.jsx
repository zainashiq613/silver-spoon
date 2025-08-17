import React from 'react';
function Welcome() {
  return (
    <div>
      <section className="px-[150px] grid grid-cols-2 gap-15">
        <div className="flex items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-primary font-bold text-6xl">Welcome to TechTri</h2>
            <p className="text-lg text-text-secondary">
              <span className="font-semibold underline text-text-primary">TechTri</span> is a
              forward-thinking technology startup committed to driving innovation and delivering
              cutting-edge solutions. With a strong focus on cybersecurity and emerging
              technologies, we aim to help individuals and organizations adapt to the fast-evolving
              digital landscape. At TechTri, we believe in building secure, scalable, and impactful
              tech solutions that empower businesses and shape a safer digital future across
              Pakistan and beyond.
            </p>
          </div>
        </div>
        <div className="h-100">
          <div className="h-full">
            <video
              src="/tech tri.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl !h-full object-cover"
              aria-label="TechTri"
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Welcome;
